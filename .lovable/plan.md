## Goal
Stop the global colour-grading on the Reformer Pilates gallery images while keeping the `.photo-grade` CSS class available for future use.

## Background
The collage images on `public/reformerpilates.html` all use the `.photo-grade` class, which currently applies a warm-amber filter:

```css
.photo-grade {
  filter: sepia(35%) saturate(90%) brightness(0.88) contrast(1.08) hue-rotate(-8deg);
}
```

This makes the photos look cooler and darker than the originals.

## Plan
1. **Open** `public/reformerpilates.html`.
2. **Update** the `.photo-grade` rule to keep the class selector but disable the filter:
   ```css
   .photo-grade {
     /* reserved for future colour grading; currently passthrough */
     filter: none;
   }
   ```
3. **Remove** the existing comment that describes the warm-amber colour-grade, since it no longer applies.

## Result
All gallery images will render with their original colours and warmth. The `.photo-grade` class remains in the markup so it can be re-enabled later by simply adding a `filter` value.

## Out of scope
- No markup changes to the `<img>` tags.
- No changes to hover behaviour (already removed in a previous edit).
- No changes to other pages or components.