# Notion CMS Setup Guide — OCA-PD Website

This guide walks you through setting up Notion as the content management system for the OCA-PD website.

---

## Step 1: Create a Notion Account

1. Go to [notion.so](https://notion.so) and sign up for a free account.
2. You don't need a paid plan — the free tier is sufficient.

---

## Step 2: Create a Notion Integration

1. Go to [notion.com/my-integrations](https://www.notion.com/my-integrations)
2. Click **"New integration"**
3. Give it a name: `OCA-PD Website`
4. Select your workspace
5. Set capabilities: **Read content** only (for security)
6. Click **"Submit"**
7. Copy the **Internal Integration Token** (starts with `secret_...`)
8. Paste it as `NOTION_TOKEN` in your `.env.local`

---

## Step 3: Create the Activities Database

1. In Notion, create a new page
2. Type `/database` and select **"Table - Full page"**
3. Name it: `OCA-PD Activities`
4. Add these properties:

| Property Name | Type | Notes |
|---------------|------|-------|
| `title` | Title | Activity name (default) |
| `description` | Text | Full description |
| `date` | Date | Event date |
| `cover_image` | Files & Media | Photos (can add multiple) |
| `locale` | Select | Options: `ar`, `en` |
| `published` | Checkbox | Check to make visible |

5. Click **"Share"** in top right → **"Add connections"** → Select `OCA-PD Website`
6. Copy the database ID from the URL: `notion.so/[workspace]/[DATABASE_ID]?v=...`
7. Paste as `NOTION_ACTIVITIES_DB_ID` in `.env.local`

---

## Step 4: Create the News Database

Repeat Step 3 with:
- Name: `OCA-PD News`
- Same properties as Activities
- Paste ID as `NOTION_NEWS_DB_ID`

---

## Step 5: Add Content

### Adding an Activity:
1. Open the Activities database
2. Click **"New"**
3. Fill in:
   - **title**: Activity name in Arabic or English
   - **description**: Full description
   - **date**: When the activity took place
   - **cover_image**: Upload photos (drag & drop)
   - **locale**: Select `ar` for Arabic or `en` for English
   - **published**: ✓ Check to publish

### Content Guidelines:
- Create separate entries for Arabic and English versions
- Use the same date for both language versions
- Upload high-quality photos (max 5MB each via Notion free tier)
- Always check `published` when content is ready

---

## Step 6: Configure Environment Variables

Create `.env.local` in the project root:

```env
NOTION_TOKEN=secret_your_token_here
NOTION_ACTIVITIES_DB_ID=your_activities_db_id
NOTION_NEWS_DB_ID=your_news_db_id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Step 7: Verify

1. Run `npm run dev`
2. Visit `http://localhost:3000/ar`
3. Your Notion content should appear in the Activities and News sections

---

## ⚠️ Important Notes

- **The website never breaks** if Notion is down or misconfigured — it just shows empty states
- Content updates automatically every **1 hour** (ISR revalidation)
- To force an update, redeploy or wait for the next revalidation cycle
- Free Notion tier supports up to 1,000 blocks — sufficient for an NGO
