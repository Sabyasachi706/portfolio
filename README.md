# Sabyasachi Satapathy — Data Analyst Portfolio

A premium, production-ready portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **next-themes** (dark/light toggle)
- **Lucide React** icons
- **Google Fonts**: Playfair Display, DM Sans, JetBrains Mono

---

## 📁 Project Structure

```
/app
  layout.tsx       — Root layout, fonts, SEO, JSON-LD
  page.tsx         — Main page assembling all sections
  globals.css      — CSS variables, theme system, custom classes

/components
  Navbar.tsx         — Sticky nav with mobile menu & theme toggle
  ThemeProvider.tsx  — next-themes wrapper
  ThemeToggle.tsx    — Animated sun/moon toggle
  Hero.tsx           — Hero section with stats
  Education.tsx      — Timeline education cards
  Skills.tsx         — Grouped skill badges
  Projects.tsx       — Result-oriented project cards
  Experience.tsx     — Animated timeline experience
  Certifications.tsx — Badge-style certification cards
  Contact.tsx        — Form + contact info
  Footer.tsx         — Links and copyright
  ScrollReveal.tsx   — Reusable scroll animation wrapper
  CustomCursor.tsx   — Custom dot cursor (desktop only)
  LoadingScreen.tsx  — Animated loading screen
  SectionDivider.tsx — Decorative section separator
```

---

## ⚡ Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your portfolio goes live in ~60 seconds.

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

---

## 🎨 Customization

### Update personal info

Edit the data directly inside each component:

| File | What to update |
|---|---|
| `components/Hero.tsx` | Headline, stats |
| `components/Education.tsx` | Education entries |
| `components/Skills.tsx` | Skill groups and items |
| `components/Projects.tsx` | Project cards with GitHub links |
| `components/Experience.tsx` | Work experience timeline |
| `components/Certifications.tsx` | Certification badges |
| `components/Contact.tsx` | Email, phone, LinkedIn URL |
| `app/layout.tsx` | SEO meta tags, JSON-LD |

### Add Resume Download

Place your resume PDF at:
```
/public/resume.pdf
```

The "Download Resume" button in the Hero section is already wired to `/resume.pdf`.

### Update Social Links

In `components/Footer.tsx`, update the GitHub and LinkedIn `href` values.
In `components/Contact.tsx`, update the LinkedIn `href`.

---

## 🌙 Theme System

The portfolio uses CSS custom properties for seamless dark/light switching:

- **Dark** (default): Deep navy `#0A192F`, teal accent `#2DD4BF`
- **Light**: Off-white `#F8F5F0`, beige cards `#EADBC8`, muted navy accent

Theme persists via `localStorage` (handled by `next-themes`).

---

## 📊 SEO & Performance

- Semantic HTML throughout
- OpenGraph and Twitter meta tags in `layout.tsx`
- JSON-LD structured data for Person schema
- Google Fonts with `display: swap`
- Lazy animations triggered by `useInView`
- Optimized for Lighthouse score 90+

---

## 🐛 Troubleshooting

**Fonts not loading?**
Make sure you have internet access during build — Next.js fetches Google Fonts at build time.

**Animation jitter?**
Ensure `framer-motion` version ≥ 11. Run `npm ls framer-motion` to check.

**Theme flicker on load?**
The `suppressHydrationWarning` on `<html>` and `enableSystem={false}` on ThemeProvider are already configured to prevent this.

---

## 📄 License

Built for Sabyasachi Satapathy. All rights reserved.
