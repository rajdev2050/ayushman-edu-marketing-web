# Component Analysis Report

## Summary

This report identifies components that are duplicated across the website instead of using reusable components.

---

## 🔴 **CRITICAL DUPLICATIONS**

### 1. **Back Button Component** - Multiple Separate Implementations

**Reusable Component:** ❌ **NOT CREATED** (Should be created)

**Separate Copies Found:**

- `app/about/page.tsx` (lines 23-30)
- `app/contact/page.tsx` (lines 13-20)
- `app/event/page.jsx` (lines 157-163)
- `app/event/[id]/page.tsx` (lines 139-146) - Uses Link instead of button
- `app/class/[classname]/page.tsx` (lines 131-137) - Different styling

**Issues:**

- 5 different implementations with similar but not identical code
- Inconsistent styling (some use `router.back()`, one uses `Link`)
- Different text labels ("Back", "Back to Events", "Back to Classes")
- Maintenance burden: changes need to be made in 5 places

**Recommendation:** Create a reusable `BackButton` component in `components/BackButton.tsx`

---

### 2. **Dialog/Modal Components** - Multiple Separate Implementations

**Reusable Component:** ✅ `components/Dialog.tsx` (EXISTS but NOT USED everywhere)

**Separate Copies Found:**

#### a) Inline Dialogs in `app/page.tsx`:

- **Contact Dialog** (lines 137-163) - Inline implementation
- **Fees Dialog** (lines 166-244) - Inline implementation

#### b) Inline Modal in `app/class/[classname]/page.tsx`:

- **Enquiry Modal** (lines 295-380) - Inline implementation

#### c) Custom Dialog Components:

- `components/AboutDialog.tsx` - Custom implementation (not using Dialog.tsx)
- `components/EventGallery.tsx` - Custom modal implementation

**Issues:**

- `Dialog.tsx` exists but is not being used
- 4+ separate dialog implementations with similar structure
- Duplicated animation styles (`animate-fadeIn`, `animate-scaleIn`)
- Inconsistent backdrop blur values (`backdrop-blur-xs`, `backdrop-blur-sm`)
- Different z-index values and styling

**Recommendation:**

- Refactor all dialogs to use `components/Dialog.tsx`
- Or create specialized dialog components that extend the base Dialog

---

### 3. **Animation Styles** - Duplicated CSS

**Reusable Styles:** ❌ **NOT CENTRALIZED**

**Duplicated Animations Found:**

- `app/page.tsx` (lines 248-262) - Inline `<style>` tag
- `components/EventGallery.tsx` (lines 276-293) - Inline `<style>` tag
- `app/class/[classname]/page.tsx` (lines 387-393) - Inline `<style>` tag
- `app/globals.css` (lines 58-65) - Global styles (but not used everywhere)

**Issues:**

- Same animation keyframes defined in multiple places
- Inconsistent animation durations
- Maintenance burden

**Recommendation:**

- Move all animations to `app/globals.css`
- Remove inline style tags
- Use Tailwind animation utilities where possible

---

## 🟡 **MINOR DUPLICATIONS**

### 4. **Form Input Styling** - Similar Patterns

**Reusable Component:** ✅ `components/Input.tsx` (EXISTS)

**Separate Implementations:**

- `app/get-enrolled/page.tsx` - Uses inline input styling
- `app/admission/page.tsx` - Uses inline input styling
- `app/contact/page.tsx` - Uses `ContactForm` component (which uses inline inputs)
- `app/class/[classname]/page.tsx` - Uses inline input styling

**Issues:**

- `Input.tsx` component exists but is not consistently used
- Similar input styling patterns repeated across forms
- Inconsistent focus states and error handling

**Recommendation:**

- Use `Input.tsx` component consistently
- Or create a `FormInput` wrapper with validation styling

---

### 5. **Button Styling** - Mostly Consistent

**Reusable Component:** ✅ `components/Button.tsx` (EXISTS and mostly used)

**Status:** ✅ **GOOD** - Button component is used consistently across the site

---

## 📊 **Statistics**

- **Total Duplicated Components:** 3 major, 1 minor
- **Files with Duplications:** 8+ files
- **Reusable Components Not Used:** 2 (`Dialog.tsx`, `Input.tsx`)
- **Missing Reusable Components:** 1 (`BackButton.tsx`)

---

## ✅ **RECOMMENDATIONS**

### Priority 1 (High Impact):

1. **Create `BackButton` component** - Will reduce 5 duplicate implementations
2. **Refactor dialogs to use `Dialog.tsx`** - Will reduce 4+ duplicate implementations
3. **Centralize animation styles** - Will reduce 3+ duplicate style definitions

### Priority 2 (Medium Impact):

4. **Standardize form inputs** - Use `Input.tsx` consistently or create form components

### Priority 3 (Low Impact):

5. **Code review** - Ensure new components use existing reusable components

---

## 📝 **Files Requiring Refactoring**

1. `app/about/page.tsx` - Replace back button
2. `app/contact/page.tsx` - Replace back button
3. `app/event/page.jsx` - Replace back button
4. `app/event/[id]/page.tsx` - Replace back button
5. `app/class/[classname]/page.tsx` - Replace back button, replace modal
6. `app/page.tsx` - Replace inline dialogs with Dialog component
7. `components/AboutDialog.tsx` - Consider using base Dialog component
8. `components/EventGallery.tsx` - Consider using base Dialog component

---

## 🎯 **Expected Benefits**

- **Reduced Code Duplication:** ~200+ lines of duplicate code eliminated
- **Easier Maintenance:** Changes in one place affect all usages
- **Consistency:** Uniform styling and behavior across the site
- **Better Testing:** Test reusable components once instead of multiple times
- **Improved Performance:** Smaller bundle size with shared components
