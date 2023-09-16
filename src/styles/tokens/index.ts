export const fonts = {
  calibre: "Calibre",
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 850,
  xl: 1024,
  xxl: 1240,
  xxxl: 1480,
} as const;

export type Breakpoint = keyof typeof breakpoints;
