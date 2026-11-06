# Sakthivel A. – Video Editor Portfolio (Vite + React)

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output in /dist
npm run preview
```

## Structure
```
src/
  main.jsx               entry
  App.jsx                nav, footer, preloader, cursor, hash router, page transition
  styles.css             all styles (colour tokens: --lime = silver accent, --ink = black, --paper = ivory)
  lib/nav.js             useHash() + nav.go(page) used for the shutter page transition
  data/projects.js       18 work concepts, services, principles, quotes, tools
  components/ui.jsx      Head (letter reveal), Rv (scroll reveal), Pic, Panel (animated image), tilt helpers
  pages/Home.jsx         Hero, Films, Campaigns, Photo, Create, Strategy, Behind, Impact, Selected Work, Philosophy, Quote
  pages/Work.jsx         Work gallery + /work-<slug> project detail
  pages/About.jsx        About (mindset slider, principles timeline, inspirations, quotes)
  pages/Services.jsx     7 services with expandable deliverables
  pages/Contact.jsx      Contact details + validated mailto enquiry form
  assets/*.webp          images (file name = key used in code, e.g. IMG.n5)
```

## Notes
- Routes use hash names (`#work`, `#about`, `#work-the-art-of-everyday`), so it works on any static host without server config.
- Contact form opens the visitor's email client (mailto) with the enquiry prefilled. No backend, so nothing is sent until they press send. To send directly, connect a form service (Formspree, EmailJS) in `src/pages/Contact.jsx`.
- All 18 work projects are fictional demonstration concepts, not client work.
- To change an image: replace the file in `src/assets/` keeping the same name, or add a new `.webp` and use `IMG.yourname`.
