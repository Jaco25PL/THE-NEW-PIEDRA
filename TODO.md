# PIEDRA Website TODO List

## Pages to Create
- [ ] **Historia Page**
  - Implement layout and content
  - Ensure consistent styling

- [ ] **Construir Page**
  - Similar structure to remodelar page
  - Adapt content for construction focus

- [ ] **Blog Page**
  - Create blog layout
  - Implement article previews

- [ ] **Contactar Page**
  - Create contact form
  - Add validation
  - Connect to backend/email service

## Responsive Design
- [ ] Implement mobile responsive design
  - Test on different device sizes
  - Fix breakpoint issues

## Content Updates
- [ ] Replace placeholder data with real information:
  - Phone numbers
  - Email addresses
  - Physical address
  - Team photos
  - Project images

## Bug Fixes
- [ ] **Navigation**
  - Fix navbar behavior when scrolling

- [ ] **FAQ Section**
  - Fix footer movement when expanding FAQ items
  - Improve accordion animation

## Enhancements
- [ ] Reorganize folder and file structure
  - Consistent naming conventions
  - Better component organization

- [ ] Add number increasing animation in Stats section

- [ ] Review and fix header buttons
  - Check functionality
  - Improve styling

----------------------------

## Recommended Project Structure

src/
  ├── assets/
-  │   ├── fonts/            # Keep your fonts here (already doing this)
-  │   └── icons/            # SVG icons tshat might be imported directly in components
  │
  ├── components/
  │   ├── common/           # Shared components across all pages
  │   │   ├── Button/
  │   │   │   ├── CTAButton.jsx
  │   │   │   └── index.js
  │   │   ├── Header/
  │   │   │   ├── Header.jsx
  │   │   │   └── index.js
  │   │   ├── Social/
  │   │   │   ├── Social.jsx
  │   │   │   └── index.js
  │   │   ├── Footer/
  │   │   └── Testimonials/
  │   │       ├── Testimonials.jsx
  │   │       └── index.js
  │   │
  │   ├── layout/           # Page layout components
  │   │   ├── Heroes/       # Hero sections for different pages
  │   │   │   ├── MainHero.jsx
  │   │   │   ├── RemodelarHero.jsx
  │   │   │   ├── ConstruirHero.jsx
  │   │   │   ├── HistoriaHero.jsx
  │   │   │   └── index.js
  │   │   └── Section/      # Common section layouts
  │   │
  │   ├── features/         # Feature sections shared across pages
  │   │   ├── AboutUs/
  │   │   │   ├── AboutUs.jsx
  │   │   │   ├── AboutUsCont.jsx
  │   │   │   └── index.js
  │   │   ├── FAQ/
  │   │   │   ├── FAQ.jsx
  │   │   │   └── index.js
  │   │   ├── Stats/
  │   │   │   ├── Stats.jsx
  │   │   │   └── index.js
  │   │   ├── Works/
  │   │   │   ├── Works.jsx
  │   │   │   └── index.js
  │   │   └── Clients/
  │   │       ├── Clients.jsx
  │   │       ├── ClientCard.jsx
  │   │       └── index.js
  │
  ├── data/                 # All data files (already doing this)
  │   ├── customerReviews.js
  │   ├── faq.js
  │   ├── works.js
  │   ├── construirContent.js  # Content specific to Construir page
  │   └── remodelarContent.js  # Content specific to Remodelar page
  │
  ├── hooks/                # Custom hooks (already doing this)
  │   ├── useHeaderScroll.js
  │   └── useNumberAnimation.js  # For stats counter animation
  │
  ├── pages/                # Page components (already doing this)
  │   ├── Home/
  │   │   └── index.jsx
  │   ├── Historia/
  │   │   └── index.jsx
  │   ├── Remodelar/
  │   │   └── index.jsx
  │   ├── Construir/
  │   │   └── index.jsx
  │   ├── Blog/
  │   │   └── index.jsx
  │   └── Contacto/
  │       └── index.jsx
  │
  ├── styles/               # CSS modules (already doing this)
  │   ├── components/
  │   │   ├── Button.module.css
  │   │   ├── Header.module.css
  │   │   └── ...
  │   └── pages/
  │       ├── Home.module.css
  │       ├── Remodelar.module.css
  │       └── ...
  │
  ├── App.jsx
  ├── index.css
  └── main.jsx