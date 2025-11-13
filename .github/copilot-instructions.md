# GitHub Copilot Instructions - Catalogue Minier MULTIPARTS

## Project Overview

This is a static website project for **MULTIPARTS**, a supplier of mining and industrial equipment based in Côte d'Ivoire, Africa. The project serves as an online catalog showcasing partner brands across various categories of mining equipment and services.

### Purpose
- Display a comprehensive catalog of mining equipment suppliers and brands
- Provide contact information for MULTIPARTS
- Enable PDF generation/printing of the catalog
- Offer AI-powered analysis features for market research, supplier risk assessment, and TCO calculations

### Target Audience
Mining companies, industrial procurement teams, and construction project managers in Africa, particularly French-speaking regions.

## Technology Stack

- **HTML5**: Single-page application structure
- **CSS3**: Styling with TailwindCSS (via CDN)
- **JavaScript (ES6+)**: Client-side interactivity, modals, and API integration
- **External Services**:
  - TailwindCSS CDN for styling
  - Google Cloud Run/Functions for AI analysis features
  - Gemini API for AI-powered market analysis

### No Build Process
This is a pure static website with no build tools, package managers, or dependencies to install.

## File Structure

```
.
├── catalogue-fournisseurs.html    # Main application file
├── README.md                       # Project readme
├── CNAME                          # GitHub Pages custom domain
├── favicon.ico                    # Site favicon
├── Gemini_Generated_Image_Mining.png  # Hero image
├── logo-multiparts.png            # Company logo
└── Logo pour catalogue en ligne.png   # Additional logo
```

## Code Style and Conventions

### HTML
- French language content (`lang="fr"`)
- Semantic HTML5 structure with proper sectioning
- Accessibility considerations with ARIA labels and semantic tags
- Print-optimized with `@media print` styles

### CSS
- Embedded `<style>` tag in the HTML head
- TailwindCSS utility classes for rapid styling
- Custom CSS classes for:
  - Print formatting (`.catalog-page`, `@media print`)
  - Responsive design (`@media screen`)
  - Component-specific styles (`.table-custom`, `.modal`, `.expertise-box`)
- Mobile-first responsive approach
- Print-optimized styles for A4 paper format

### JavaScript
- ES6+ module syntax (`type="module"`)
- Event delegation patterns
- Async/await for API calls
- Clear function naming in French context
- DOM manipulation using modern APIs

### Naming Conventions
- **Variables/Functions**: camelCase (e.g., `generateCSV`, `extractBrands`, `showSelectionModal`)
- **CSS Classes**: kebab-case (e.g., `.catalog-page`, `.section-header`, `.back-to-top`)
- **IDs**: camelCase (e.g., `generatePdfButton`, `iaModal`, `modalContent`)
- **French terminology**: Used throughout for business domain terms

## Architecture and Features

### Main Sections
1. **Équipements Lourds & Mobiles** (Heavy & Mobile Equipment)
2. **Traitement des Minerais & Séparation** (Ore Processing & Separation)
3. **Pompes, Vannes & Composants** (Pumps, Valves & Components)
4. **Automatisation, Contrôle & Électronique** (Automation & Control)
5. **Instrumentation, Laboratoire & Consommables** (Instrumentation & Lab)
6. **Outillage Spécialisé** (Specialized Tools)
7. **Services & Maintenance** (Services & Maintenance)

### Key Features

#### 1. Catalog Display
- Organized by product families
- Brand listings with specializations
- Responsive tables with mobile optimization
- Sticky navigation elements

#### 2. PDF Generation
- Browser print dialog triggered by button
- Optimized print styles for professional output
- A4 page format
- Headers and footers for printed pages

#### 3. AI Analysis Features
Three types of AI-powered analysis:
- **Market Analysis** (`marche`): Market trends and pricing for heavy equipment
- **Supplier Risk Analysis** (`risque`): Risk assessment for supplier selection
- **TCO Analysis** (`tco`): Total Cost of Ownership comparison

#### 4. Interactive Elements
- Modal dialogs for AI feature configuration
- Brand selection checkboxes (limit 2-3 selections)
- Progress bars for AI analysis
- CSV export to clipboard functionality
- "Back to top" floating button

### API Integration
- Base URL: Google Cloud Run service
- Endpoint pattern: `/analyse-[type]-[category]`
- POST requests with JSON payload containing prompts
- Error handling with user-friendly messages

## Development Guidelines

### When Adding New Features

1. **Maintain French Language**: All user-facing text should be in French
2. **Preserve Print Styles**: Ensure new elements work in print view
3. **Mobile Responsiveness**: Test on small screens (<640px)
4. **No Print Elements**: Add `no-print` class to elements that shouldn't appear in PDFs
5. **Accessibility**: Maintain semantic HTML and ARIA labels

### When Modifying Tables

- Maintain the `.table-custom` class structure
- Include both `<thead>` and `<tbody>` sections
- Keep the two-column format: Brand | Specialization
- Bold important brands with `<strong>` tags
- Add `.table-container` wrapper for responsive behavior

### When Working with Modals

- Use the existing `#iaModal` structure
- Update `#modalTitle` and `#modalContent` for different steps
- Handle close events properly (`.close-btn`, window click outside)
- Maintain consistent button styling with TailwindCSS classes

### When Adding Brands/Equipment

1. Identify the correct section (1-7)
2. Add a new `<tr>` in the appropriate `<tbody>`
3. Use `<strong>` tags for major/preferred brands
4. Keep specialization descriptions concise
5. Maintain alphabetical or logical grouping within sections

## Business Context

### Company Information
- **Name**: MULTIPARTS
- **Location**: Abidjan, Côte d'Ivoire
- **Industry**: Mining and industrial equipment supply
- **Expertise**: 30 years of international critical sourcing
- **Role**: Independent multi-brand sourcing specialist

### Value Proposition
- Multi-brand spare parts and equipment sourcing
- Reduced downtime through interchangeable parts
- Traceability and compliance
- Solutions for new, refurbished, or obsolete equipment

### Contact Details
- **Address**: 2ᵉ étage, Immeuble Ganamet, 4565 Boulevard Félix Houphouët-Boigny, Abidjan
- **Phone**: +225 27 21 25 01 46
- **Mobile**: +225 07 09 39 95 29
- **Email**: rafiou.oyeossi@multipartsci.com

## Deployment

### GitHub Pages
- Hosted on GitHub Pages
- Custom domain configured via CNAME file
- No build step required - direct HTML serving
- Updates are live immediately upon push to main branch

### Testing Locally
Simply open `catalogue-fournisseurs.html` in a modern web browser. No local server required.

## Common Tasks

### Adding a New Equipment Section
1. Create new section with appropriate ID (`section-X`)
2. Add to table of contents with anchor link
3. Create `.section-header` with icon and title
4. Add `.expertise-box` with company expertise statement
5. Create `.table-container` with `.table-custom` table
6. Update JavaScript if CSV export is needed

### Modifying AI Features
- Update endpoint URLs in the `callGeminiFunction` function
- Modify prompts for different analysis types
- Ensure proper error handling
- Test with actual Cloud Run deployment

### Updating Styles
- Prefer TailwindCSS utility classes for consistency
- Add custom CSS only when TailwindCSS is insufficient
- Maintain both screen and print media queries
- Test on mobile, tablet, and desktop viewports

## Important Notes

1. **No Dependencies**: This project intentionally has no npm packages or build tools
2. **Single File Application**: All HTML, CSS, and JavaScript in one file for simplicity
3. **French Language**: Maintain French for all UI elements and content
4. **Print-First Design**: Consider print layout in all design decisions
5. **Offline-Friendly**: Core catalog works without internet (AI features require connection)

## Testing Checklist

When making changes, verify:
- [ ] Desktop view (>640px) looks correct
- [ ] Mobile view (<640px) is usable
- [ ] Print preview shows professional output
- [ ] All links and buttons are functional
- [ ] Modal dialogs open and close properly
- [ ] French text is grammatically correct
- [ ] No console errors in browser
- [ ] AI features show appropriate loading states
- [ ] Error messages are user-friendly

## Prohibited Actions

- Do not add build tools or package managers
- Do not convert to a multi-page application
- Do not change the language from French to English
- Do not remove print optimization styles
- Do not add backend server requirements (keep static)
- Do not introduce breaking changes to the single-file structure

## AI Feature Context

The AI analysis features integrate with Google's Gemini API via Cloud Run functions:
- **Purpose**: Provide strategic insights to procurement teams
- **Use Cases**: Market analysis, supplier risk assessment, TCO calculations
- **User Flow**: Section selection → Brand selection (2-3) → Analysis execution → Results display
- **Rate Limiting**: Consider user experience with loading states and progress indicators

## Security Considerations

- API keys are stored in Cloud Run environment variables (not in code)
- No user authentication required (public catalog)
- Email links use `mailto:` protocol
- External CDN resources loaded via HTTPS
- No sensitive data collection or storage

---

**Last Updated**: 2025-11-13  
**Maintained By**: MULTIPARTS Development Team
