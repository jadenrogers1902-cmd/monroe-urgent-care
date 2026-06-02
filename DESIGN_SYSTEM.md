# Monroe Urgent Care Design System

## Purpose

This design system defines the visual and interaction direction for the new Monroe Urgent Care website. It should guide future UI design and implementation without directly copying CareFirst. CareFirst may be used as a UX-quality reference for clarity, conversion flow, and mobile usability only.

## Brand Direction

The website should feel:

- Local
- Family-friendly
- Affordable
- Warm
- Clean
- Modern
- Trustworthy
- Professional

The design should avoid:

- Corporate hospital styling
- Generic stock-photo-heavy layouts
- Old WordPress-style page structure
- Dense text blocks
- Confusing medical jargon
- Direct visual copying of CareFirst

## Existing Brand Inputs

Use Monroe Urgent Care's existing brand assets first:

- Monroe Urgent Care logo from the current site.
- Current brand color family visible in the existing site and logo.
- Real Monroe Urgent Care clinic photos when quality is acceptable.
- Facility, signage, exterior, interior, and staff photography when available.

Known live Monroe assets to review and reuse if quality allows:

- Logo: `https://monroeuc.com/wp-content/uploads/2025/08/usethislogo-muc-1024x668.jpg`
- Facility/photo carousel images from `https://monroeuc.com/wp-content/uploads/2025/02/`
- Interior/lighting image: `muc_lighting`
- Employer services image: `eps1.jpg`
- BWC-related image: `bwc.png`
- Patient/family imagery: `happychild.jpg`, `happyadult.jpg`

Important asset note:

- Current site images use empty alt text in the live markup. All reused images must receive descriptive alt text before launch.

## Color Palette

The palette should be practical, calm, and warm. Use clean medical blues/teals for trust, green for care/action reassurance, and soft neutrals for warmth and readability.

### Primary Colors

#### Monroe Deep Teal

- Hex: `#032632`
- Use for: primary text on light backgrounds, header accents, footer background, serious trust moments.
- Tone: trustworthy, professional, local.

#### Monroe Blue

- Hex: `#2F5AAE`
- Use for: links, secondary buttons, focused states, active navigation.
- Tone: clinical clarity without feeling cold.

#### Care Green

- Hex: `#23A454`
- Use for: primary conversion CTAs, open/walk-in status, success states, reassurance badges.
- Tone: approachable, helpful, action-oriented.

### Supporting Colors

#### Warm Red Accent

- Hex: `#BE574B`
- Use for: limited urgent-care highlights, emergency disclaimer icon/accent, important alerts.
- Avoid using it as the primary brand color.

#### Soft Sky

- Hex: `#EAF5FA`
- Use for: light section backgrounds, informational blocks, service category bands.

#### Soft Green

- Hex: `#EAF7EF`
- Use for: insurance/self-pay reassurance, family-care callouts, open status backgrounds.

#### Warm Neutral

- Hex: `#F7F4EF`
- Use for: subtle page bands and family-friendly warmth.
- Use sparingly so the site does not become beige-heavy.

### Neutral Colors

- Ink: `#121212`
- Body text: `#272626`
- Muted text: `#5F6872`
- Border: `#DDE3E8`
- Light background: `#F4F5F7`
- White: `#FFFFFF`

### Color Usage Rules

- Use white or very light backgrounds for most patient-facing content.
- Use Monroe Deep Teal for strong headings and footer areas.
- Use Care Green for the highest-value actions only.
- Use Monroe Blue for links and secondary actions.
- Use Warm Red Accent only for emergency/safety context or urgent emphasis.
- Do not create large monochrome blue, teal, green, beige, or gray pages.
- Maintain accessible contrast for all text and interactive elements.

## Typography

Typography should feel modern, friendly, and highly readable for stressed or mobile users.

### Recommended Type Pairing

#### Headings

- Preferred: `Inter`, `Source Sans 3`, or `Aptos Display`
- Fallback: `Arial`, `Helvetica`, sans-serif
- Weight: 650-750
- Style: clear, direct, not decorative

#### Body

- Preferred: `Inter`, `Source Sans 3`, or `Aptos`
- Fallback: `Arial`, `Helvetica`, sans-serif
- Weight: 400-500
- Style: readable, compact, warm

### Type Scale

- H1 desktop: 48-56px
- H1 mobile: 34-40px
- H2 desktop: 32-40px
- H2 mobile: 26-32px
- H3: 22-28px
- Body large: 18-20px
- Body: 16-18px
- Small: 14-15px
- Label: 13-14px

### Typography Rules

- Do not use viewport-width-based font sizing.
- Letter spacing should be `0`.
- Avoid all-caps paragraphs or long all-caps labels.
- Use short section intros instead of dense text blocks.
- Medical terms should be paired with plain-language labels when needed.

## Buttons

Buttons should be obvious, touch-friendly, and conversion-focused.

### Primary Button

Use for:

- Book Online
- Main patient CTA
- Final page CTA

Style:

- Background: Care Green `#23A454`
- Text: White
- Border: Care Green
- Hover: darker green
- Radius: 8px maximum
- Font weight: 650
- Minimum height: 44px desktop, 48px mobile

### Secondary Button

Use for:

- Call
- Directions
- View Services
- Learn More

Style:

- Background: White
- Text: Monroe Deep Teal
- Border: `#DDE3E8`
- Hover: Soft Sky or subtle border darkening
- Radius: 8px maximum

### Tertiary/Text Button

Use for:

- Related page links
- Inline navigation
- Less urgent actions

Style:

- Text: Monroe Blue
- Underline or arrow indicator on hover/focus
- No heavy decorative treatment

### Employer Button Variant

Use for:

- Request Employer Services
- Occupational health inquiry

Style:

- Background: Monroe Blue `#2F5AAE`
- Text: White
- Hover: deeper blue

### Button Rules

- Use icons for Call, Book, Directions, and external links where helpful.
- Keep labels short and literal.
- Do not stack more than two primary-looking buttons in one area.
- On mobile, primary actions should be thumb-friendly and not cramped.

## Cards

Cards should organize repeated content, not decorate every section.

### Standard Card

Use for:

- Services
- Conditions
- Reviews
- FAQ groups
- Related pages

Style:

- Background: White
- Border: `1px solid #DDE3E8`
- Radius: 8px maximum
- Shadow: none or very subtle
- Padding: 20-28px

### Service Card

Content:

- Icon
- Service title
- One short description
- Link or CTA

Rules:

- Keep text concise.
- Use consistent icon sizing.
- Cards should be equal height within a row when practical.

### Condition Card

Content:

- Condition name
- Plain-language category
- Related service link

Rules:

- Avoid clinical over-explanation.
- Use compact cards for easy scanning.

### Review Card

Content:

- Short approved review excerpt
- Reviewer label
- Optional source/star indicator

Rules:

- Do not over-crop reviews into vague fragments.
- Prioritize reviews about families, staff kindness, speed, and affordability.

## Header and Navigation Styling

### Desktop Header

Structure:

- Logo on the left.
- Primary nav centered or right-aligned.
- Phone and Book Online CTA on the right.
- Optional slim topbar for hours/address if it remains readable.

Style:

- Background: White.
- Text: Monroe Deep Teal.
- Active/hover links: Monroe Blue.
- Book Online: primary green button.
- Height: compact enough to preserve first-screen content.

Rules:

- Navigation should not wrap awkwardly.
- Keep the header clean and practical.
- Do not mimic large hospital-system headers.

### Mobile Header

Structure:

- Logo.
- Menu button.
- Optional small Call or Book shortcut if space allows.

Style:

- White background.
- Clear menu icon.
- Large tap targets.

Rules:

- Menu content should include all primary navigation items.
- Call, Book, and Directions must remain easy to access.

## Footer Styling

Footer should feel useful, not like a dumping ground.

Structure:

- Address and phone.
- Hours.
- Drug-screen hours.
- Quick service links.
- Patient resource links.
- Book/call/directions actions.
- Emergency disclaimer summary.
- Legal/accessibility links.

Style:

- Background: Monroe Deep Teal.
- Text: White or very light neutral.
- Links: light blue/green accent with accessible contrast.
- Sections should be grouped with clear labels.

Rules:

- Include location details without forcing users to hunt.
- Keep emergency disclaimer readable but concise.

## Forms

Forms may be used for employer inquiries, contact requests, or patient resource requests. Urgent patient care should still prioritize phone, booking, and directions.

### Field Styling

- Label above field.
- Border: `#DDE3E8`
- Focus border: Monroe Blue
- Error border: Warm Red Accent
- Radius: 6-8px
- Minimum field height: 44px
- Clear helper/error text

### Form Rules

- Keep forms short.
- Use required fields sparingly.
- Never collect sensitive medical details unless the workflow is secure and approved.
- Employer forms may ask for company name, contact name, phone, email, service interest, and message.
- Contact forms should not replace urgent-care booking or phone calls.

## Icon Style

Icons should be simple, friendly, and functional.

Style:

- Line icons.
- Rounded stroke ends.
- 1.75-2px stroke weight.
- Consistent 20px, 24px, or 32px sizing.
- Use Monroe Blue, Monroe Deep Teal, or Care Green.

Recommended icon categories:

- Calendar/check-in for Book Online.
- Phone for Call.
- Map pin or route for Directions.
- Stethoscope or medical cross for Urgent Care.
- Test tube for Testing.
- Clipboard for Physicals.
- Briefcase or ID badge for Occupational Health.
- Shield/check for Insurance/Self-Pay.
- Alert triangle for Emergency Disclaimer.

Rules:

- Icons should clarify, not decorate.
- Do not use mixed icon styles.
- Do not rely on icons without text for unfamiliar actions unless a tooltip/label is available.

## Spacing System

Use a consistent 4px-based spacing system.

Tokens:

- `4px`: micro spacing
- `8px`: compact element gap
- `12px`: small internal gap
- `16px`: standard gap
- `24px`: card padding / group spacing
- `32px`: section internal spacing
- `48px`: compact section spacing
- `64px`: standard desktop section spacing
- `96px`: major desktop section spacing

Layout rules:

- Avoid dense text walls.
- Use shorter content groups with clear headings.
- Keep related CTAs close to the content they support.
- Maintain enough white space for a clean medical experience without feeling luxury or sparse.

## Responsive Breakpoints

Recommended breakpoints:

- Small mobile: `360px`
- Mobile: `480px`
- Large mobile / small tablet: `640px`
- Tablet: `768px`
- Small desktop: `1024px`
- Desktop: `1280px`
- Wide desktop: `1440px`

Responsive rules:

- Mobile should be designed first for urgent-care behavior.
- Cards should collapse to one column on mobile.
- Quick action bar should become stacked or horizontally scroll-free.
- Header navigation should switch to mobile nav before wrapping.
- CTAs should remain visible and tappable.
- Text must never overflow buttons or cards.

## Mobile Sticky CTA Behavior

Sticky actions:

- Call
- Book
- Directions

Behavior:

- Appear after the visitor scrolls beyond the hero or remain fixed from initial load if testing shows better usability.
- Stay pinned to the bottom of the viewport on mobile.
- Use three equal-width actions.
- Include clear icons and short labels.
- Respect safe-area insets on modern mobile devices.
- Do not cover form submit buttons, map controls, or footer content.

Visual style:

- Background: White.
- Top border: `#DDE3E8`.
- Call: Monroe Deep Teal or Monroe Blue.
- Book: Care Green.
- Directions: Monroe Blue.

Rules:

- Book should remain the strongest visual action.
- Call and Directions should be easy but slightly less dominant.

## Image Usage Rules

### Priority Order

1. Real Monroe Urgent Care photos.
2. Real staff, facility, signage, waiting area, exam room, exterior, and local clinic photos.
3. Carefully selected stock imagery only when real Monroe photos are not available or not usable.

### Reusable Monroe Image Types

Use first when quality is acceptable:

- Logo
- Clinic exterior photos
- Clinic interior photos
- Staff photos
- Facility photos
- Signage photos
- Employer services photos
- Family/patient-friendly images already owned by Monroe

### Image Quality Requirements

Images should be:

- Clear and well-lit.
- Current.
- Authentic to Monroe Urgent Care.
- Croppable for desktop and mobile.
- Free of distracting clutter.
- Consistent in warmth and brightness.

Avoid:

- Generic smiling-doctor stock photos when real clinic assets exist.
- Dark, blurry, over-filtered, or heavily cropped images.
- Images that imply hospital emergency-room services.
- Images with visible patient information.
- Images that show people without proper usage rights.

### Alt Text Rules

Every meaningful image must have descriptive alt text.

Examples:

- Logo: `Monroe Urgent Care logo`
- Exterior: `Exterior of Monroe Urgent Care on North Main Street in Monroe, Ohio`
- Interior: `Clean waiting area inside Monroe Urgent Care`
- Staff: `Monroe Urgent Care staff member assisting a patient at the front desk`
- Facility: `Exam room at Monroe Urgent Care`
- Signage: `Monroe Urgent Care building sign`

Decorative images may use empty alt text only if they add no information and are marked appropriately in implementation.

## Layout Tone

### Recommended Feel

- Clean white sections.
- Warm, restrained accent bands.
- Clear visit information.
- Practical service cards.
- Real local imagery.
- Human but not casual.
- Medical but not institutional.

### Avoid

- Oversized stock-photo hero layouts.
- Decorative gradients or abstract medical shapes.
- Corporate hospital blue-on-blue monotony.
- Overly rounded pill-heavy layouts.
- Nested cards.
- Long text blocks without scannable structure.

## Accessibility Requirements

- All text must meet WCAG contrast expectations.
- All interactive elements need visible focus states.
- Navigation must be keyboard accessible.
- Form fields need explicit labels.
- Images require descriptive alt text when meaningful.
- CTA labels must be understandable out of context.
- Emergency-care disclaimer must be readable and not hidden in tiny footer text only.

## CareFirst Inspiration Boundaries

CareFirst may inspire:

- Clear location-first flow.
- Repeated conversion paths.
- Mobile-friendly action placement.
- Scannable service grouping.
- Trust-building patterns.
- Insurance/review/location visibility.

Do not copy:

- Exact visual styling.
- Layout proportions.
- Copy structure.
- Color treatment.
- Component appearance.
- Imagery approach.

Monroe should feel like a local, independent urgent care clinic, not a regional chain.
