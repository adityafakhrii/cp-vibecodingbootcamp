
# Vibe Coding Bootcamp — Landing Page Plan

A premium, AI-native landing page in Bahasa Indonesia targeting non-tech founders who want to build apps with AI tools. Dark-mode-first with elegant glassmorphism, gradient accents (blue → purple), and a strong conversion path.

## Design Foundation
- **Theme system**: Dark default + light toggle (persisted in localStorage), implemented via CSS variables in `index.css` and Tailwind tokens.
- **Palette** (HSL tokens):
  - Dark: bg `#0B0F1A`, surface `#111827`, card `#1A2238`, hairline border at 8% white
  - Light: bg `#F8FAFC`, surface `#FFFFFF`, text `#0F172A`
  - Accents: blue `#4F8CFF`, purple `#7C3AED`, gradient `135deg` between them
- **Typography**: Inter via Google Fonts; tight, bold display headings; relaxed body.
- **Effects**: subtle grid + radial gradient backdrop, glassmorphism cards (`backdrop-blur`, translucent surface, hairline border), soft shadows, gradient hover glow on primary CTA, fade-in on scroll via IntersectionObserver.
- **Components**: gradient primary button, ghost/secondary button, glass card, section wrapper with consistent vertical rhythm.

## Page Sections
1. **Sticky Navbar** — logo wordmark, anchor links (Materi, Mentor, Harga, FAQ), theme toggle, gradient CTA "Gabung Sekarang".
2. **Hero** — animated gradient grid backdrop, headline "Punya Ide Aplikasi Tapi Gak Bisa Coding?…", subheadline, primary + secondary CTA, trust strip (tools logos row).
3. **Problem** — 4 pain-point cards (gak bisa coding, developer mahal, bingung pakai AI, ide stuck).
4. **Solution** — 2-column: copy left, glass mock UI right showing "ide → AI → app" flow.
5. **Project Output** — 3 tier cards (Level 1 Portfolio, Level 2 POS, Level 3 AI apps: Falaah & SahurYuk) with gradient level badges.
6. **Features** — 5 feature cards with icons (live sessions, recordings, community, mentoring, modules).
7. **Mentor** — Aditya Fakhri Riansyah card with avatar placeholder, role at CODEPOLITAN, short bio, credibility chips.
8. **Tools** — grid of tool pills: Lovable, Bolt.new, Base44, v0, Google Antigravity, Git, GitHub, NPM.
9. **Testimonials** — 3 glass cards with realistic Indonesian voice + role.
10. **Pricing** — single highlighted glass card: strikethrough Rp2.000.000, big Rp700.000, urgency line ("Slot terbatas — harga naik setelah batch ini terisi"), gradient CTA "Amankan Slot Sekarang", checklist of inclusions.
11. **FAQ** — accordion (shadcn) with 5–6 objection-handling Q&As.
12. **Final CTA** — full-width gradient panel: "Kalau di 2026 lo masih bangun manual, lo udah ketinggalan." + CTA.
13. **Footer** — minimal, copyright, socials.

## Functionality
- Dark/light toggle in navbar, persisted via localStorage, syncs `document.documentElement` class.
- Smooth scroll to sections via anchor links.
- Sticky navbar with subtle blur on scroll.
- Scroll-triggered fade-in for each section.
- Fully responsive, mobile-first; CTA always visible (sticky navbar CTA on mobile).
- SEO: descriptive `<title>`, meta description, Open Graph tags in `index.html`.

## File Changes
- `index.html` — title, meta, Inter font.
- `src/index.css` — replace tokens with new dark/light palette, add gradient + grid utilities, add fade-in keyframes.
- `tailwind.config.ts` — extend colors (accent-blue, accent-purple), gradient, animations.
- `src/pages/Index.tsx` — compose the landing page from section components.
- `src/components/landing/` — `Navbar`, `Hero`, `Problem`, `Solution`, `Projects`, `Features`, `Mentor`, `Tools`, `Testimonials`, `Pricing`, `FAQ`, `FinalCTA`, `Footer`, `ThemeToggle`, `GradientButton`, `SectionReveal`.
