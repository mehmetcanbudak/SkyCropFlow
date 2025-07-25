/**
 * Global Breakpoint Configuration
 * 
 * This file defines all breakpoints used throughout the application.
 * All breakpoints are defined in tailwind.config.ts and should be referenced here.
 * 
 * Breakpoints:
 * - xs: 320px and up (extra small devices)
 * - sm: 768px and up (small devices - mobile)
 * - md: 1024px and up (medium devices)
 * - lg: 1280px and up (large devices - desktop)
 */

export const BREAKPOINTS = {
  xs: 320,
  sm: 768,  // Mobile breakpoint
  md: 1024,
  lg: 1280, // Desktop breakpoint
} as const;

export const BREAKPOINT_NAMES = {
  MOBILE: 'sm',
  TABLET: 'md', 
  DESKTOP: 'lg',
} as const;

/**
 * Helper function to check if current screen size matches a breakpoint
 */
export const isBreakpoint = (breakpoint: keyof typeof BREAKPOINTS): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS[breakpoint];
};

/**
 * Helper function to get current breakpoint
 */
export const getCurrentBreakpoint = (): keyof typeof BREAKPOINTS => {
  if (typeof window === 'undefined') return 'lg';
  
  const width = window.innerWidth;
  
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}; 