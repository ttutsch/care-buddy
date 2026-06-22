# Care Buddy 💧

A gentle daily care companion for kids — meet your **water goal** and take your
**medicine on time** to keep your buddy happy and healthy. Built as a single-file,
installable web app (PWA) that stores everything **on the device only** (no accounts,
no cloud).

## Features
- A friendly character who reacts live to the day — thriving → happy → sleepy →
  gently under-the-weather, and bounces right back.
- **Water tracker** with a configurable goal/unit and a bottle that fills up.
- **Medicine** — two daily doses with a "time since last dose" timer, a "next dose"
  countdown, and travel-friendly time adjustments.
- **History** calendar, **streaks & stars**, and collectible **sticker rewards**.
- **Customizable** buddy (skin, hair, shirt, glasses).
- Age-appropriate "Did you know?" health tips.

## Safety
This app helps build healthy habits and remember a routine. It is **not medical
advice** and never tells anyone to change a dose. Always follow the care team's plan,
and check with a grown-up about doses, changes, or anything that doesn't seem right.

## Run / host
It's just static files — no build step. Serve the folder with any static host
(GitHub Pages, Netlify, etc.), then on a phone/tablet open the link in the browser
and choose **Add to Home Screen**.

Local preview:
```
npm install      # only needed for the icon generator / local server
npm run dev       # serves at http://localhost:5180
```

## Dev tooling (not part of the shipped app)
- `npm run make-icons` regenerates the PNG app icons from `icon.svg` (uses `sharp`).
