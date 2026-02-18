# OCA-PD - Our Children Association for Persons with Disabilities
## جمعية أهالي ذوي الاحتياجات الخاصة – أبناؤنا

Official website for **Our Children Association for Persons with Disabilities (OCA-PD)**, a Palestinian NGO based in Nablus serving persons with disabilities and their families since 2016.

---

## 🌟 Features

- **Fully Bilingual** — Arabic (RTL) and English (LTR) with seamless switching
- **Zero-Fail Architecture** — Build always succeeds, even when Notion is unavailable
- **Notion CMS Integration** — Non-technical admins can manage Activities and News content
- **Fully Static + ISR** — Ultra-fast loading, auto-revalidation every hour
- **Mobile Responsive** — Beautiful on all devices
- **Zero Operational Cost** — Runs entirely on free-tier services
- **Professional Design** — Deep blue brand palette with the organization's logo

## 📄 Pages

| Route | Page | Type |
|-------|------|------|
| `/ar` or `/en` | Home | ISR |
| `/[locale]/about` | About Us | Static |
| `/[locale]/programs` | Programs & Services | Static |
| `/[locale]/activities` | Activities List | ISR |
| `/[locale]/activities/[id]` | Activity Detail | ISR |
| `/[locale]/news` | News List | ISR |
| `/[locale]/news/[id]` | News Detail | ISR |
| `/[locale]/gallery` | Photo Gallery | ISR |
| `/[locale]/volunteer` | Volunteer | Static |
| `/[locale]/contact` | Contact | Static |
| `/[locale]/donate` | Donate | Static |

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Notion API** (headless CMS)
- **Google Fonts** (Tajawal for Arabic)
- **Vercel** (deployment)

## 🚀 Quick Start

```bash
# 1. Clone / extract
cd oca-pd

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your Notion credentials

# 4. Run development server
npm run dev
# → http://localhost:3000 (redirects to /ar)

# 5. Build for production
npm run build
```

## 📁 Project Structure

```
oca-pd/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Redirect to /ar
│   └── [locale]/
│       ├── layout.tsx          # Locale layout (Header, Footer)
│       ├── page.tsx            # Home page
│       ├── about/
│       ├── programs/
│       ├── activities/[id]/
│       ├── news/[id]/
│       ├── gallery/
│       ├── volunteer/
│       ├── contact/
│       └── donate/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ContentCard.tsx
├── lib/
│   ├── notion.ts               # Safe Notion API wrapper
│   └── i18n.ts                 # Internationalization
├── messages/
│   ├── ar.json                 # Arabic translations
│   └── en.json                 # English translations
├── types/
│   └── content.ts
└── public/
    └── logo.png
```

## 🔧 Environment Variables

```env
# Required for dynamic content (optional - site works without these)
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxx
NOTION_ACTIVITIES_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_NEWS_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Site config
NEXT_PUBLIC_SITE_URL=https://www.oca-pd.org
```

## 🌍 Internationalization

- Default locale: **Arabic** (`/ar`) with RTL layout
- Secondary locale: **English** (`/en`) with LTR layout
- Language switcher in header

## 📞 Organization Contact

- **Phone:** 0597 550 083
- **Email:** aspn.association@gmail.com
- **Address:** Palestine - Nablus - Askar Old Camp Services Building, 2nd Floor

## 💰 Donation Info (Bank Transfer)

- **Bank:** Bank of Palestine (BOP)
- **Account:** ASSOCCIATION OF SPECIAL NEEDS PARENTS - OUR CHILDREN
- **Account #:** 220177
- **IBAN:** PS37PINV089802201770030038000
- **SWIFT:** PINVPS22
- **Currency:** NIS

---

*Built with ❤️ for OCA-PD — Nablus, Palestine*
