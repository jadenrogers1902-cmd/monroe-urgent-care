# Mobile Layout QA Report
**Monroe Urgent Care — Mobile Responsive Fix**
Date: 2025

---

## Root Cause of Mobile Overflow

The primary cause of all horizontal clipping and overflow was a single line in `styles.css`:

```css
.hero-layout {
  width: 100%; /* ← THIS overrode .container's width: calc(100% - 32px) */
}
```

The `.hero-layout` class is applied to the same `<div>` as `.container`. The `.container` class sets `width: calc(100% - 32px)` to create 16px of margin on each side. But because `.hero-layout` appears later in the stylesheet, its `width: 100%` overrides the container, making the hero content run edge-to-edge with zero horizontal margin. This caused:

- Hero h1 text clipping on the left edge
- Hero paragraph text clipping
- All hero content appearing to touch the viewport edge
- Horizontal scroll on the homepage

**Fix**: Removed `width: 100%` from `.hero-layout`. The `.container` class now applies correctly.

---

## Files Changed

| File | Change |
|---|---|
| `styles.css` | Root fix: removed `width:100%` from `.hero-layout` |
| `styles.css` | Complete rewrite of responsive media query section |

---

## Header Fixes

| Issue | Fix |
|---|---|
| Phone + Patient Info + Book Online all crowded | Mobile header = 3-col grid: `[Logo] [Phone] [☰]` |
| Patient Info button visible on mobile | Hidden on `max-width: 767px` — in dropdown instead |
| Book Online button in header on mobile | Hidden — accessible via sticky Call/Book/Map bar + dropdown |
| Logo too large | Reduced to `82px` on mobile, `72px` on `≤360px` |
| Phone font too large | Scales with `clamp(0.95rem, 4vw, 1.1rem)` |
| Header items misaligned | CSS Grid `auto 1fr auto` centers phone, locks logo/menu |

---

## Dropdown Fixes

| Issue | Fix |
|---|---|
| Dropdown opening off-screen to the right | Changed to `position: fixed` — always viewport-relative |
| Dropdown positioned relative to 48px menu-wrapper | Fixed: `left: 12px; right: 12px; top: 58px` relative to viewport |
| Dropdown clipped or too narrow | `width: auto; max-width: calc(100vw - 24px)` spans near-full width |
| Dropdown covering full screen | `max-height: calc(100dvh - 80px); overflow-y: auto` |
| On desktop: dropdown goes back to correct position | `position: absolute; right: 0` restored at `min-width: 768px` |

---

## Hero Fixes

| Issue | Fix |
|---|---|
| Text clipped on left | Root fix: removed `width: 100%` from `.hero-layout` |
| H1 too large on mobile | `clamp(1.75rem, 8vw, 2.25rem)` |
| Paragraph too wide | `max-width: 100%` within the container's margins |
| Hero buttons side-by-side and too wide | `flex-direction: column`, `width: 100%`, `min-height: 50px` |
| Hero card too close to text | `gap: 1.5rem` between hero-copy and card |
| Hero card overflowing | `width: 100%; max-width: 100%; padding: 1.15rem` |

---

## Trust Marquee Fixes

| Issue | Fix |
|---|---|
| Chips partially cut off | `max-width: 100vw; overflow: hidden` on `.trust-marquee` |
| Chips too large | `font-size: 0.74rem; padding: 0.28rem 0.6rem` |
| Gap between chips too wide | `gap: 0.55rem` |

---

## Other Spacing Fixes

| Element | Fix |
|---|---|
| Section padding | `2.25rem 0` on mobile (vs 80px desktop) |
| Card padding | `16px` on all cards (service, detail, info, step) |
| Quick-info bar | 2-column grid instead of 5 stacked rows |
| CTA rows | Stack vertically, full-width buttons, `46px` min-height |
| Page hero image | Hidden on mobile (content prioritised), restored at 768px |
| Sticky CTA bar | `60px` height, `0.85rem` font, `64px` body padding-bottom |
| Footer | Tighter padding and gaps on mobile |

---

## Viewport Widths Tested

| Width | Header | Hero | Dropdown | Overflow |
|---|---|---|---|---|
| 360px | ✅ 3-col grid fits | ✅ text within margins | ✅ fixed, 336px wide | ✅ none |
| 390px | ✅ phone centered | ✅ h1 clamp ~1.9rem | ✅ fixed, 366px wide | ✅ none |
| 430px | ✅ balanced | ✅ text readable | ✅ fixed, 406px wide | ✅ none |
| 560px | ✅ 3-col grid | ✅ looks good | ✅ fixed | ✅ none |
| 768px | ✅ full header restored | ✅ 2-col hero grid | ✅ absolute (normal) | ✅ none |
| 1024px | ✅ desktop layout | ✅ hero 84vh | ✅ absolute | ✅ none |
| Desktop | ✅ logo 140px | ✅ hero 88vh | ✅ absolute | ✅ none |

---

## Breakpoint Structure

| Breakpoint | Rule | Purpose |
|---|---|---|
| `max-width: 767px` | Mobile layout | 3-col header, stacked grids, fixed dropdown, chips small |
| `max-width: 360px` | Extra small | Smaller logo, smaller font |
| `560px–767px` | Phablet | 2-col cards, 3-col conditions |
| `min-width: 768px` | Tablet + Desktop | Full layout, page hero image restored, dropdown = absolute |
| `min-width: 1040px` | Wide desktop | Larger logo, hero heights |

---

## Remaining Notes

- Emergency disclaimer wording is preserved on all pages
- All content (services, forms, contact, patient info) is preserved
- Inner pages tested via page-hero hero fix (image hidden mobile, restored at 768px)
- The `position: fixed` dropdown requires that the header `min-height` on mobile matches the `top` value (both set to `58px`)
- If the header height ever changes on mobile, update `top: 58px` in the dropdown rule to match
