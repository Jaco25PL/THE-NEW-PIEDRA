# Image formats

- WebP: Best modern format (smaller than JPEG/PNG, excellent quality)
- AVIF: Next-gen format (even smaller than WebP, but less browser support)
- JPEG: For photos with many colors
- PNG: For images with transparency or few colors

-[ ] Convert all to WebP
-[ ] lazy load
-[ ] resposnive with different sizes
-[ ] add image compression 

# Loading strategy

-[ ] Skeleton screens for content sections
-[ ] Progressive image loading
-[ ] Loading spinner for initial app load

# Cache

-[ ] Set proper cache headers for static assets
-[ ] Use service workers for offline functionality
-[ ] Implement cache first strategy for images  

# Code Optimization

-[ ] Code splitting
-[ ] Tree shaking optimization  
-[ ] Dynamic imports for routes
-[ ] Minimize bundle size
-[ ] Implement React.memo() for components
-[ ] Use useMemo and useCallback for expensive operations
-[ ] Lazy load routes with React.lazy()

# SEO Optimization

## Technical SEO

-[ ] Add structured data (Schema.org for construction business)
-[ ] Improve meta tags (you have react-helmet-async - good!)
-[ ] Add Open Graph tags for social sharing
-[ ] Implement XML sitemap (you have one - verify it's updated)
-[ ] Add robots.txt optimization

## Content SEO

-[ ] Add alt tags to all images (partially done)
-[ ] Implement proper heading hierarchy (H1, H2, H3)
-[ ] Add internal linking structure
-[ ] Optimize page titles and descriptions

# Core Web Vitals

## LCP

-[ ] Preload hero images
-[ ] Optimize image loading above fold
-[ ] Use priority prop on critical images

## CLS

-[ ] Set image dimensions in CSS
-[ ] Reserve space for dynamic content
-[ ] Avoid layout shifts in your sliders

## FID

-[ ] Minimize JavaScript execution time
-[ ] Use web workers for heavy tasks
-[ ] Optimize event handlers

--------------------------------------------------------------------------------

# Tools to measuere results

-- PageSpeed Insights (Google)
-- GTmetrix for performance analysis
-- Lighthouse for overall audit
-- Search Console for SEO monitoring