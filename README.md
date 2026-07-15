# Rosa — Rose SPA

A small React single-page app about roses, built with Vite. Three routes handled via
in-app state (no external router): **Home**, **About**, **Images**.

## Project structure

```
rose-app/
├── index.html                # Vite entry HTML, mounts #root
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                 # Top-level component, holds current page state
    ├── styles/
    │   └── index.css           # All global + component styles, design tokens as CSS vars
    ├── data/
    │   ├── photos.js            # Image URLs used across the site (Wikimedia Commons)
    │   └── content.js           # Written content: stats, symbolism, "language of roses"
    ├── components/
    │   ├── Navbar.jsx            # Sticky nav with mobile menu
    │   ├── Footer.jsx
    │   ├── Lightbox.jsx           # Click-to-enlarge modal used on the Images page
    │   └── RoseMark.jsx            # Small logo/icon
    └── pages/
        ├── Home.jsx               # Hero, quick facts, intro
        ├── About.jsx               # History, botany, symbolism, language of roses
        └── Images.jsx              # Photo gallery + lightbox
```

## Running it

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a static production bundle:

```bash
npm run build
npm run preview   # serve the built files locally to check them
```

The build output lands in `dist/`, which you can deploy to any static host
(Netlify, Vercel, GitHub Pages, S3, etc.).

## Notes

- Images are hotlinked from Wikimedia Commons via stable `Special:FilePath` file
  redirects (`src/data/photos.js`), so there's nothing to download or host yourself.
- Swap in your own photos by editing `src/data/photos.js`.
- Colors, fonts, and spacing are defined as CSS custom properties at the top of
  `src/styles/index.css` — change the palette there to reskin the whole site.

  ## Screenshot

  ![Home Page](images/home.png)
