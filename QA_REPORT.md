# Monroe Urgent Care Website QA Report

Date: June 2026
Site checked: local static site in `C:\Users\jaden\OneDrive\Documents\Monroe Urgant Care`

## Verification Scope

Checked 19 HTML pages plus shared CSS:

- Homepage and patient pages
- Core service pages
- Employer/occupational health pages
- Privacy and accessibility placeholder pages
- Shared header, footer, desktop navigation, mobile navigation, CTAs, image assets, and safety wording

Viewport screenshots were generated with local Chrome headless at:

- Mobile: 390 x 844
- Tablet: 768 x 1024
- Desktop: 1440 x 1000

Screenshot evidence is saved in `qa-screenshots/`.

## Checks Performed

- Desktop layout: screenshot checked across homepage, urgent care, occupational health, insurance/self-pay, patient info, and contact pages.
- Tablet layout: screenshot checked across the same representative pages.
- Mobile layout: screenshot checked across the same representative pages.
- Mobile sticky CTA: verified present on mobile pages and hidden at desktop breakpoint.
- Header navigation: verified desktop nav and mobile `<details>` navigation exist.
- Footer navigation: verified footer service, location, phone, hours, privacy, and accessibility links.
- Local links: parsed and checked all local `href` targets.
- Appointment links: verified ClockwiseMD booking URL returns HTTP 200.
- Phone links: verified `tel:+15134612273` is used consistently.
- Map/directions links: verified Google Maps search URL returns HTTP 200.
- Images: checked all current unique remote image URLs return HTTP 200.
- Alt text: checked every `<img>` has non-empty alt text.
- Forms: no forms are currently present.
- Buttons and CTAs: checked CTA links across header, hero, body sections, footer, and sticky mobile actions.
- Page speed risk: checked static file sizes and remote asset dependency.
- Heading structure: checked each HTML page has exactly one `<h1>`.
- Keyboard navigation: verified semantic anchor links, skip link, and native `<details>` mobile menu pattern.
- Color contrast: calculated primary text/button contrast ratios.
- Grammar/spelling: scanned visible site copy during QA pass.
- Medical safety wording: searched all pages for ER-replacement claims and checked required disclaimer usage.

## Issues Found

1. Mobile hero and sticky CTA clipping risk
   - The first mobile screenshots showed the homepage H1 and sticky directions action clipping at 390px.
   - Risk: weak mobile conversion UX.

2. Primary green button contrast was too low
   - Original white text on `#23a454` did not provide enough contrast for normal button text.
   - Risk: accessibility failure for primary CTAs.

3. Some pages used shortened emergency wording
   - Several patient-facing pages had a shortened footer disclaimer instead of the required full emergency guidance.
   - Risk: medical safety and compliance concern.

4. `physicals.html` was missing the exact emergency disclaimer
   - Physicals is patient-facing and needed the required safety wording.

5. External IV Hydration URL failed in this environment
   - `https://monroeivdrip.com` failed the direct connection check.
   - Risk: IV Hydration CTAs may fail for users unless the domain/TLS issue is resolved.

6. No forms are present
   - Employer inquiry CTAs are phone-based only.
   - Risk: lower conversion for employers who prefer written inquiries.

7. Privacy and accessibility pages are placeholders
   - Both pages link correctly, but they are not launch-ready legal/policy content.

## Issues Fixed

1. Mobile clipping hardening
   - Reduced mobile H1 sizing.
   - Stacked hero CTA buttons below 560px.
   - Added explicit sticky CTA grid constraints.
   - Added body overflow protection.

2. Button contrast
   - Darkened the brand green from `#23a454` to `#177a3d`.
   - New contrast: white on green = 5.4:1.

3. Tablet image stretch
   - Added page hero media alignment so images do not stretch into awkward blank space.

4. Emergency wording
   - Standardized the required wording where patient-care safety guidance appears:
     “If you are experiencing chest pain, trouble breathing, severe bleeding, stroke symptoms, loss of consciousness, major trauma, or another life-threatening emergency, call 911 or go to the nearest emergency room.”

5. Physicals safety block
   - Added an emergency guidance section to `physicals.html`.

## Final Automated Results

- HTML pages checked: 19
- Local broken links: 0
- Pages with incorrect H1 count: 0
- Images missing alt text: 0
- Unique image URLs checked: 12
- Image URL failures: 0
- Exact emergency disclaimer occurrences: 16
- ER-replacement claims found: 0
- Appointment URL status: 200
- Google Maps URL status: 200
- Google review search URL status: 200
- Monroe IV Drip URL status: failed connection/TLS check

## Contrast Results

- White on green CTA: 5.4:1
- White on blue CTA: 6.57:1
- Body text on white: 15.09:1
- Muted text on white: 5.66:1

These pass WCAG AA for normal text in the checked combinations.

## Remaining Recommendations

1. Fix or replace `https://monroeivdrip.com` before launch if IV Hydration CTAs should leave the site.
2. Replace placeholder Privacy and Accessibility pages with approved clinic/legal content.
3. Add an employer inquiry form or dedicated email CTA if Monroe wants stronger occupational health lead capture.
4. Add local business/medical clinic schema markup, Open Graph tags, and a sitemap before production launch.
5. Consider downloading and serving approved Monroe photos locally for better speed and less dependency on the existing WordPress site.
6. Run a final real-device mobile check in Safari and Chrome after deployment because Chrome CLI screenshots are useful but not a full substitute for device QA.
7. Confirm all insurance, hours, drug screen hours, booking, and billing language with the clinic before launch.

## Scores

- Mobile score: 8/10
- Accessibility score: 8.5/10
- SEO score: 8/10
- Conversion readiness score: 8/10
- Overall launch readiness: 8/10

## Launch Readiness Summary

The site is structurally strong and close to launch from a static QA perspective. The major medical safety issue was fixed, core CTAs work, local navigation is clean, images load, headings are valid, and contrast is improved.

The main blockers before public launch are the failed IV Hydration external link, placeholder policy pages, and final clinic verification of operational details.
