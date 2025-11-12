# Catalogue Minier - AI Coding Agent Instructions

## Project Overview
This is a French industrial catalog website for MULTIPARTS, showcasing mining equipment suppliers and brands. The project consists of a single-page HTML application deployed on GitHub Pages with a custom domain (`catalogue.multipartsci.com`).

## Architecture & Structure

### Single-Page Application Design
- **Primary file**: `catalogue-fournisseurs.html` (1,430+ lines) contains ALL functionality
- **Self-contained**: Complete application with embedded CSS, JavaScript, and data
- **No build system**: Direct HTML deployment to GitHub Pages via `CNAME` file
- **Assets**: Logo images (`logo-multiparts.png`, `Gemini_Generated_Image_Mining.png`) served directly

### CSS Architecture
- **Tailwind CDN**: `https://cdn.tailwindcss.com` for utility classes
- **Custom CSS**: Embedded `<style>` block with specialized classes:
  - `.catalog-page` - Main content container with print optimization
  - `.table-custom` - Responsive tables with mobile breakpoints
  - `.expertise-box` - Black company branding bars with flexbox layout
  - Print media queries with `.no-print` and `.print-only` classes

### JavaScript Module Pattern
- **ES6 modules**: `<script type="module">` for modern browser compatibility
- **Async functions**: AI integration with Cloud Run endpoints
- **Event delegation**: Single modal manages all IA analysis interactions
- **CSV export**: `navigator.clipboard.writeText()` for data extraction

## Key Features & Workflows

### Interactive Catalog System
1. **7-section structure**: Equipment categories with supplier tables
2. **Sticky navigation**: Multi-level positioning (nav: z-index 30, tools: 20, expertise: 10)
3. **Mobile-first responsive**: Breakpoints at 640px and 768px
4. **Print optimization**: Professional PDF generation via `window.print()`

### AI Analysis Integration
- **Cloud Functions**: External Google Cloud Run endpoints for market analysis
- **Brand selection workflow**: Modal-driven UX for 2-3 brand comparisons
- **Three analysis types**: Market (`marche`), Risk (`risque`), TCO analysis
- **Progress simulation**: Visual feedback during API calls

### Company Branding Conventions
- **Color scheme**: Blue primary (`#1e40af`), Green expertise (`#166534`), Black navigation
- **French language**: All text and comments in French
- **MULTIPARTS branding**: Consistent company information and contact details

## Development Patterns

### CSS Utility Classes
```css
/* Custom utility patterns in the codebase */
.btn-mobile-icon-only /* Responsive button hiding text on mobile */
.section-header /* Blue left border with flexbox icon + title */
.table-custom tbody tr:hover /* Green hover states matching brand colors */
```

### JavaScript Data Extraction
```javascript
// Pattern for CSV generation from tables
function generateCSV(sectionId) {
    const table = document.querySelector(`#${sectionId}`).closest('.table-group').querySelector('.table-custom');
    // Semicolon-separated values for French Excel compatibility
}
```

### Modal State Management
- Single modal `#iaModal` handles all analysis workflows
- Content dynamically replaced via `innerHTML` for multi-step processes
- Event delegation on modal container for dynamic button handling

## Critical Deployment Notes

### GitHub Pages Configuration
- **Custom domain**: `catalogue.multipartsci.com` via `CNAME` file
- **Branch**: Deploy from `main` branch root directory
- **No Jekyll**: Static HTML serving without processing

### External Dependencies
- **Tailwind CSS**: CDN dependency for styling framework
- **Cloud Run endpoints**: External AI services (may be unavailable)
- **Email links**: Direct `mailto:` integration for contact workflows

## Maintenance Conventions

### Content Updates
- Supplier data embedded directly in HTML tables within `<tbody>` sections
- Each section follows pattern: `.section-header` + `.expertise-box` + `.table-container`
- Bold brands (`<strong>`) indicate primary/preferred suppliers

### Responsive Breakpoints
- Mobile: `max-width: 639px` (icon-only buttons, stacked tables)
- Tablet: `min-width: 640px` (2-column layouts)
- Desktop: `min-width: 768px` (full feature set)

### Print-Specific Features
- Comprehensive print styles with exact margins (`10mm 15mm`)
- Color preservation with `print-color-adjust: exact`
- Page break controls and orphan/widow handling

When modifying this codebase, preserve the single-file architecture, French language consistency, and mobile-first responsive design patterns.