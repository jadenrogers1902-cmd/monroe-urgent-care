# Monroe Urgent Care Component Inventory

## Purpose

This inventory defines the reusable website components needed for the Monroe Urgent Care architecture. It focuses on structure, behavior, content slots, and usage. It does not define final UI styling or full page copy.

## Global Components

### Header

Purpose:
- Provide primary navigation and high-priority conversion actions.

Content slots:
- Logo
- Primary navigation
- Phone link
- Book Online CTA
- Optional top microbar for hours/address

Navigation items:
- Urgent Care
- Services
- Occupational Health
- IV Hydration
- Insurance & Self-Pay
- Patient Info
- Contact
- Book Online

Used on:
- All pages

Notes:
- Book Online should remain visually distinct.
- Contact and phone access should be easy to reach on mobile.

### Mobile Nav

Purpose:
- Provide compact navigation for mobile visitors.

Content slots:
- Logo
- Menu trigger
- Navigation links
- Phone link
- Book Online CTA
- Directions link

Used on:
- All pages

Notes:
- Must support urgent, one-handed use.
- Should not bury Call, Book, or Directions.

### Mobile Sticky Actions

Purpose:
- Keep the three highest-intent actions available on small screens.

Actions:
- Call
- Book
- Directions

Used on:
- All pages, except possibly confirmation or external booking contexts.

Notes:
- Should persist after the hero.
- Must not cover important footer or form controls.

### Footer

Purpose:
- Provide secondary navigation, location details, trust information, and safety/legal links.

Content slots:
- Address
- Phone
- Hours
- Drug-screen hours
- Services links
- Patient resource links
- Emergency disclaimer summary
- Privacy/accessibility links

Used on:
- All pages

## Core Content Components

### Hero

Purpose:
- Establish page topic, local relevance, and primary action.

Content slots:
- Eyebrow or category label
- H1
- Short intro statement
- Primary CTA
- Secondary CTA
- Optional image
- Optional quick facts

Variants:
- Home hero
- Service hero
- Employer hero
- Location hero
- IV hydration hero
- SEO page hero

Used on:
- All core and optional SEO pages

Notes:
- Home hero should emphasize walk-in urgent care in Monroe, OH.
- Employer hero should shift CTA language toward partnership/inquiry.

### Quick Action Bar

Purpose:
- Put practical visit information immediately under the hero.

Content slots:
- Phone
- Address
- Hours
- Book link
- Directions link
- Walk-ins welcome note
- Drug-screen hours note where relevant

Used on:
- Home
- Urgent Care
- Testing & Diagnostics
- Contact / Location
- Optional local SEO pages

Notes:
- Keep this concise and scannable.

### Service Cards

Purpose:
- Present service categories and link to deeper pages.

Content slots:
- Icon
- Service name
- Short description
- Link

Core cards:
- Urgent Care
- Testing & Diagnostics
- Physicals
- Occupational Health
- Workers' Compensation
- Drug Testing
- IV Hydration

Used on:
- Home
- Services
- Urgent Care
- Occupational Health
- Optional SEO pages as related links

### Condition Cards

Purpose:
- Help patients quickly identify treatable conditions.

Content slots:
- Condition name
- Category
- Short description
- Related service link

Example categories:
- Respiratory
- Ear, eye, and throat
- Urinary and digestive
- Skin and rash
- Minor injuries
- Physicals and testing

Used on:
- Home
- Conditions We Treat
- Urgent Care
- Optional SEO pages

Notes:
- Keep descriptions short. Avoid writing full medical copy inside cards.

### Review Cards

Purpose:
- Provide social proof.

Content slots:
- Review excerpt
- Reviewer label
- Review category
- Optional star/source indicator

Review categories:
- Family care
- Fast service
- Staff kindness
- Affordability/self-pay
- Clean/modern clinic

Used on:
- Home
- Reviews
- Urgent Care
- About
- Optional SEO pages

Notes:
- Use only verified or approved reviews.
- Keep parent testimonial prominent if approved.

### Location Block

Purpose:
- Help visitors find and visit the clinic.

Content slots:
- Clinic name
- Address
- Map/embed
- Directions CTA
- Phone
- Nearby communities
- Parking/entrance notes if confirmed

Used on:
- Home
- Contact / Location
- Urgent Care
- Optional local SEO pages
- Footer

### Hours Block

Purpose:
- Display operating hours clearly.

Content slots:
- Standard clinic hours
- Drug-screen hours
- Holiday/special-hours note if available

Used on:
- Home
- Contact / Location
- Header/topbar if abbreviated
- Quick action bar
- Footer
- Drug Testing

Notes:
- Separate clinic hours from drug-screen hours to prevent confusion.

### Insurance/Self-Pay Block

Purpose:
- Reduce cost hesitation and reassure visitors.

Content slots:
- Insurance accepted statement
- Self-pay available statement
- Billing/verification note
- Link to Insurance & Self-Pay page

Used on:
- Home
- Urgent Care
- Services
- Conditions We Treat
- Testing & Diagnostics
- Insurance & Self-Pay
- Optional SEO pages

Notes:
- Avoid listing specific plans until verified.
- Avoid precise pricing unless confirmed and approved.

### Emergency Disclaimer Block

Purpose:
- Route life-threatening conditions to 911/ER and clarify urgent care scope.

Content slots:
- Brief urgent care versus emergency statement
- Emergency symptom examples
- 911/ER instruction

Used on:
- Home
- Urgent Care
- Conditions We Treat
- Patient Info
- Contact / Location
- Optional condition/service SEO pages where relevant
- Footer summary

Notes:
- Tone should be calm, clear, and legally cautious.

### Final CTA

Purpose:
- Close each page with a clear next step.

Content slots:
- Short CTA heading
- Supporting line
- Primary action
- Secondary action
- Optional directions action

Variants:
- Patient final CTA
- Employer final CTA
- IV hydration final CTA
- Location final CTA

Used on:
- All core and optional SEO pages

## Specialized CTA Components

### Employer Services CTA

Purpose:
- Convert local employers into occupational health leads.

Content slots:
- Employer-focused heading
- Short service list
- Request/contact CTA
- Phone CTA

Service list:
- Pre-employment physicals
- DOT physicals
- Drug testing
- Workers' compensation
- Fit testing/hearing services if confirmed

Used on:
- Home
- Occupational Health
- Workers' Compensation
- Drug Testing
- Physicals
- Services

### IV Hydration CTA

Purpose:
- Promote Monroe IV Drip without overpowering urgent-care conversion.

Content slots:
- IV hydration heading
- Short wellness positioning
- Self-pay note
- Link to IV Hydration page or Monroe IV Drip site

Used on:
- Home
- Services
- IV Hydration

Notes:
- Keep separate from emergency or acute-care claims.

## Page-Specific Components

### What To Bring List

Purpose:
- Prepare visitors and reduce front-desk friction.

Content slots:
- Photo ID
- Insurance card if applicable
- Payment/co-pay
- Medication list
- Relevant forms
- Parent/guardian requirements for minors if confirmed

Used on:
- Patient Info
- Physicals
- Drug Testing
- Workers' Compensation

### FAQ Accordion

Purpose:
- Answer common patient questions without overwhelming main page flow.

Content slots:
- Question
- Short answer
- Related link

Used on:
- Patient Info
- Insurance & Self-Pay
- Urgent Care
- Occupational Health
- Optional SEO pages

Question categories:
- Walk-ins and appointments
- Insurance and self-pay
- Kids and families
- Physicals
- Drug testing
- Urgent care versus ER

### Nearby Communities List

Purpose:
- Support local SEO and help visitors recognize service area relevance.

Content slots:
- Community names
- Optional travel/context note

Used on:
- Home
- Contact / Location
- Optional location SEO pages

Potential communities:
- Monroe
- Middletown
- Trenton
- Liberty Township
- West Chester
- Nearby Butler/Warren County areas as confirmed

### Related Pages Block

Purpose:
- Improve internal linking and guide users to next relevant content.

Content slots:
- Page title
- Short label
- Link

Used on:
- Services
- Conditions We Treat
- Testing & Diagnostics
- Physicals
- Occupational Health
- Optional SEO pages

## Content Governance Notes

- Final medical claims should be reviewed before launch.
- Hours and drug-screen hours need confirmation before design/build.
- Insurance language should remain general unless a verified plan list is maintained.
- Reviews should be sourced from approved testimonial content or verified public review profiles.
- Emergency-care disclaimer should be consistent wherever it appears.
- IV hydration language should avoid unverified clinical outcome claims.
