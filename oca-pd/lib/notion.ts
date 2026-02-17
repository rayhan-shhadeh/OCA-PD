import { Client } from '@notionhq/client';
import type { Locale, ContentItem, TeamMember, Program } from '@/types/content';

export const revalidate = 3600;

const notion = process.env.NOTION_TOKEN
  ? new Client({ auth: process.env.NOTION_TOKEN })
  : null;

async function safeFetch<T>(
  fetchFn: () => Promise<T[]>,
  fallback: T[] = []
): Promise<T[]> {
  if (!notion) return fallback;
  try {
    const result = await fetchFn();
    return result;
  } catch (error) {
    console.error('Notion fetch error:', error);
    return fallback;
  }
}

function parseNotionPage(page: any, itemType: string): any {
  const allImages = page.properties.cover_image?.files
    ?.map((file: any) => file.file?.url || file.external?.url)
    .filter(Boolean) || [];

  const fullDescription = page.properties.description?.rich_text
    ?.map((text: any) => text.plain_text)
    .join('') || '';

  return {
    id: page.id,
    title:
      page.properties.title?.title?.[0]?.plain_text ||
      page.properties.name?.title?.[0]?.plain_text ||
      'Untitled',
    description: fullDescription,
    date: page.properties.date?.date?.start || new Date().toISOString(),
    coverImage: allImages[0] || null,
    images: allImages,
    published: true,
    ...(itemType === 'team' && {
      role: page.properties.role?.rich_text?.[0]?.plain_text || '',
      order: page.properties.order?.number || 0,
    }),
    ...(itemType === 'program' && {
      icon: page.properties.icon?.rich_text?.[0]?.plain_text || '♿',
    }),
  };
}

export async function getItems(
  databaseId: string | undefined,
  locale: Locale,
  itemType: 'activity' | 'news' | 'team' | 'program'
): Promise<any[]> {
  return safeFetch(async () => {
    if (!databaseId) return [];
    const response = await notion!.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          { property: 'published', checkbox: { equals: true } },
          { property: 'locale', select: { equals: locale } },
        ],
      },
      sorts: [
        {
          property: itemType === 'team' ? 'order' : 'date',
          direction: itemType === 'team' ? 'ascending' : 'descending',
        },
      ],
    });
    return response.results.map((page: any) => ({
      ...parseNotionPage(page, itemType),
      locale,
    }));
  }, []);
}

export async function getItemById(
  id: string,
  locale: Locale
): Promise<any | null> {
  const results = await safeFetch(async () => {
    const page = await notion!.pages.retrieve({ page_id: id });
    const allImages = (page as any).properties.cover_image?.files
      ?.map((file: any) => file.file?.url || file.external?.url)
      .filter(Boolean) || [];
    const fullDescription = (page as any).properties.description?.rich_text
      ?.map((text: any) => text.plain_text)
      .join('') || '';
    return [{
      id: page.id,
      title:
        (page as any).properties.title?.title?.[0]?.plain_text ||
        (page as any).properties.name?.title?.[0]?.plain_text ||
        'Untitled',
      description: fullDescription,
      date: (page as any).properties.date?.date?.start || new Date().toISOString(),
      coverImage: allImages[0] || null,
      images: allImages,
      locale,
      published: true,
    }];
  }, []);
  return results[0] || null;
}
