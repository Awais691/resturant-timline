# Saffron & Sage

A responsive, six-page restaurant website concept built with semantic HTML, CSS, and vanilla JavaScript. Saffron & Sage is fictional; its contact details, menu prices, hours, and location are examples and do not describe a real business.

## Pages

- `index.html` — home, seasonal highlights, restaurant story, and visit preview
- `menu.html` — starters, mains, desserts, drinks, and PKR concept prices
- `about.html` — restaurant story, chef concept, sourcing, and values
- `reservations.html` — validated reservation request demo
- `gallery.html` — responsive image gallery with keyboard-accessible lightbox
- `contact.html` — example contact information, validated message demo, and FAQ accordion

## Run locally

No package manager, build step, or backend is required. Open this folder in VS Code and use Live Server, or run Python's built-in static server from this directory:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- Images are remotely hosted by Unsplash and the heading/body fonts load from Google Fonts. An internet connection is needed for those assets. Replace remote image URLs with locally licensed files before deployment if offline delivery is needed.
- The forms use browser validation and provide demo feedback only. They do not submit, store, or confirm anything. Connect a real service before accepting reservations or messages.
- Prices, opening hours, address, and telephone number are illustrative. The `.example` email address is reserved for examples.
- The layout includes responsive navigation, visible keyboard focus, reduced-motion support, lazy-loaded below-the-fold imagery, and page-specific metadata.