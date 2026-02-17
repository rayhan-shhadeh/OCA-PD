# Deployment Guide — OCA-PD Website

## Deploy to Vercel (Free)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: OCA-PD website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/oca-pd.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Root directory: leave as-is

### Step 3: Add Environment Variables

In Vercel project settings → Environment Variables, add:

```
NOTION_TOKEN = secret_your_token
NOTION_ACTIVITIES_DB_ID = your_db_id
NOTION_NEWS_DB_ID = your_db_id
NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
```

### Step 4: Deploy

Click **"Deploy"** — your site will be live in ~2 minutes!

---

## Custom Domain

1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain: `oca-pd.org` or `www.oca-pd.org`
3. Follow DNS configuration instructions
4. SSL is automatic and free

---

## Content Updates

Since Notion content revalidates every hour automatically:
- Add content in Notion → Live on website within 60 minutes
- Or trigger manual revalidation by redeploying

---

## Zero Downtime

This website is designed to **never fail**:
- If Notion is down → Shows empty states, never crashes
- If environment variables are missing → Shows static content
- Build always succeeds regardless of CMS availability
