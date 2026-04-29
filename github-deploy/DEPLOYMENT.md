# Deployment Instructions

## Files Included
- `index.html` — Main page (updated headline, updated TWEAK_DEFAULTS)
- `styles.css` — All styles (updated h1 sizing)
- `shared.jsx` — Shared components (Reveal, CountUp, Arrow, Check, Plus, etc.)
- `sections-top.jsx` — Nav, Hero, Marquee, Stats, Services
- `sections-bottom.jsx` — Process, Cases, Testimonials, Founder, Fit, FAQ, CTA, Footer
- `tweaks-panel.jsx` — Tweaks UI system

## Steps to Deploy

### 1. Clone your repo
```bash
git clone https://github.com/MateoUrbancic/m31-claude-website.git
cd m31-claude-website
```

### 2. Copy these files to the root
Copy all files from this folder into the repo root, replacing the old versions.

### 3. Commit and push
```bash
git add .
git commit -m "Update: DFY low-ticket funnel messaging, blue accent, updated copy"
git push origin main
```

### 4. Vercel auto-deploy
Once pushed to `main`, Vercel will automatically detect the changes and redeploy.

## What Changed
- **Headline:** "Meta Ads that pay for themselves from day one."
- **Copy:** All sections rewritten for DFY low-ticket ascension funnel service
- **Accent:** Electric blue (#4A9EFF) throughout
- **Case Studies:** Evolve (#1 Skool, 3.5x ROAS) and Email Marketing Agency
- **Pricing:** $1,500 Setup + Support | $9,000 DFY/3 months
- **Process:** 4-step 21-day launch timeline
- **FAQ:** 6 objections from the service brief

## Live URL
Once deployed, your site will be live at the Vercel URL connected to this repo.

## Next Steps
- Update the Founder section (§05 in the brief) with your name, origin story, and portrait
- Wire up real CTA buttons to your booking system
- Add real social links in the footer
- Update meta tags (og:image, description, etc.) in index.html
