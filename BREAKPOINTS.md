# Breakpoint System Documentation

## Overview
This project uses a centralized breakpoint system to ensure consistent responsive behavior across all components.

## Breakpoint Definitions

All breakpoints are defined in `tailwind.config.ts`:

```typescript
screens: {
  'xs': '320px',   // Extra small devices
  'sm': '768px',   // Small devices (mobile)
  'md': '1024px',  // Medium devices (tablet)
  'lg': '1280px',  // Large devices (desktop)
}
```

## Usage

### 1. Tailwind Classes
Use Tailwind's responsive prefixes with the defined breakpoints:

```jsx
// Mobile first approach
<div className="w-full md:w-1/2 lg:w-1/3">
  Content
</div>

// Hide/show based on breakpoint
<div className="hidden lg:block">Desktop only</div>
<div className="block lg:hidden">Mobile/tablet only</div>
```

### 2. JavaScript Breakpoint Checks
Import and use the centralized breakpoint configuration:

```typescript
import { BREAKPOINTS, isBreakpoint, getCurrentBreakpoint } from '@/lib/breakpoints';

// Check if current screen matches a breakpoint
if (isBreakpoint('lg')) {
  // Desktop logic
}

// Get current breakpoint
const currentBreakpoint = getCurrentBreakpoint();

// Use breakpoint values directly
if (window.innerWidth >= BREAKPOINTS.lg) {
  // Desktop logic
}
```

### 3. CSS Media Queries
Use the defined breakpoints in CSS:

```css
/* Mobile and tablet */
@media (max-width: 1280px) {
  .mobile-styles { }
}

/* Desktop only */
@media (min-width: 1280px) {
  .desktop-styles { }
}
```

## Breakpoint Guidelines

- **xs (320px+)**: Extra small devices
- **sm (768px+)**: Small devices, mobile phones
- **md (1024px+)**: Medium devices, tablets
- **lg (1280px+)**: Large devices, desktop computers

## File Locations

- **Tailwind Config**: `tailwind.config.ts`
- **Breakpoint Utilities**: `client/src/lib/breakpoints.ts`
- **Documentation**: `BREAKPOINTS.md`

## Migration Notes

All scattered breakpoint definitions have been centralized:
- ✅ Tailwind config updated with custom breakpoints
- ✅ CSS media queries updated to use consistent breakpoints
- ✅ JavaScript breakpoint checks use centralized configuration
- ✅ Navbar component updated to use Tailwind classes
- ✅ Products page updated to use centralized breakpoints

## Best Practices

1. **Always use the centralized breakpoints** defined in `tailwind.config.ts`
2. **Use Tailwind classes** when possible instead of custom CSS
3. **Import breakpoint utilities** for JavaScript checks
4. **Follow mobile-first approach** with responsive classes
5. **Document any custom breakpoint usage** in component comments 