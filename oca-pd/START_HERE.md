# 🚀 START HERE — OCA-PD Website

Welcome to the OCA-PD website codebase!

## Quick Navigation

| What you want to do | Go to |
|---------------------|-------|
| Set up locally | `README.md` |
| Connect Notion CMS | `NOTION_SETUP.md` |
| Deploy to production | `DEPLOYMENT.md` |

## 5-Minute Setup

```bash
npm install          # Install dependencies
cp .env.example .env.local  # Configure environment
npm run dev          # Start development server
# Visit http://localhost:3000
```

## Key Files

- `messages/ar.json` — Arabic translations & static content
- `messages/en.json` — English translations & static content
- `app/[locale]/page.tsx` — Home page
- `components/Header.tsx` — Navigation
- `lib/notion.ts` — Notion API integration
- `public/logo.png` — Organization logo

## Organization Info

- **Name:** Our Children Association for Persons with Disabilities
- **Arabic:** جمعية أهالي ذوي الاحتياجات الخاصة – أبناؤنا
- **Location:** Nablus, Palestine
- **Phone:** 0597 550 083
- **Email:** aspn.association@gmail.com
