// src/styles/responsive.ts
import { DefaultTheme } from 'styled-components';

type BreakpointKey = keyof DefaultTheme['breakpoints'];

/**
 * Creates a media query for the specified breakpoint
 * @param breakpoint - The breakpoint to create a media query for
 * @param type - The type of media query (min or max)
 * @returns A media query string
 */
export const createMediaQuery = (
  breakpoint: BreakpointKey,
  type: 'min' | 'max' = 'min'
) => {
  return (theme: DefaultTheme) => {
    const breakpointValue = theme.breakpoints[breakpoint];
    return `@media (${type}-width: ${breakpointValue})`;
  };
};

/**
 * Media query functions for min-width (screens larger than the breakpoint)
 */
export const media = {
  xs: createMediaQuery('xs'),
  sm: createMediaQuery('sm'),
  md: createMediaQuery('md'),
  lg: createMediaQuery('lg'),
  xl: createMediaQuery('xl'),
};

/**
 * Media query functions for max-width (screens smaller than the breakpoint)
 */
export const mediaDown = {
  xs: createMediaQuery('xs', 'max'),
  sm: createMediaQuery('sm', 'max'),
  md: createMediaQuery('md', 'max'),
  lg: createMediaQuery('lg', 'max'),
  xl: createMediaQuery('xl', 'max'),
};

/**
 * Media query for custom screen sizes
 * @param size - The custom screen size in pixels
 * @param type - The type of media query (min or max)
 * @returns A media query string
 */
export const customMedia = (size: number, type: 'min' | 'max' = 'min') => {
  return `@media (${type}-width: ${size}px)`;
};
