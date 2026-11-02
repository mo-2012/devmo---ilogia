# DevMO Studio — devmo.ilogia-eg.com
Static site (HTML/CSS/vanilla JS). Content lives in `data.js` (Arabic + English).

## Deploy (GitHub Pages)
1. Create a repo (e.g. `devmo-site`), push the contents of this folder to `main`.
2. Settings → Pages → Deploy from branch `main` / root. The `CNAME` file sets `devmo.ilogia-eg.com`.
3. Settings → Pages → enable **Enforce HTTPS** once the certificate is issued.

## DNS (only this one record; touch nothing else)
At the DNS host of ilogia-eg.com add: `CNAME  devmo  →  <your-github-username>.github.io.`
Do not add or change the apex/www records.

## Content that still needs verification (DevMO source site was unreachable)
- Contact: email, GitHub, location, hours → fill `contact` in `data.js` (empty fields stay hidden).
- Project descriptions, technologies, status and images → not invented; add per project once verified.
- Real DevMO / iLogia logo files → put in `assets/logos/`. Current logos are text/SVG stand-ins.
- DevMO brand colors → `--dm` in `style.css` is a stand-in; iLogia green `#136F58` is from its theme color.
- Add an Open Graph image (`og:image`) when available.
