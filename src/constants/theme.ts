
export const COLORS = {
  blue: '#170398',
  green: '#5ACF29',
  cyan: '#0499B1',
  grey: '#D9D9D9',
  white: '#FFFFFF',
  lightGrey: '#F5F5F5',
  darkText: '#333333',
  background: '#0B0B20',
  card: '#151538',
};

export const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export const RADIUS = {
  small: 10,
  medium: 12,
  large: 16,
};

export const Colors = {
  light: {
    text: COLORS.darkText,
    textSecondary: '#666666',
    background: COLORS.white,
    backgroundElement: COLORS.lightGrey,
    backgroundSelected: '#E8E4FF',
    tint: COLORS.blue,
  },
  dark: {
    text: COLORS.white,
    textSecondary: COLORS.grey,
    background: COLORS.background,
    backgroundElement: COLORS.card,
    backgroundSelected: COLORS.blue,
    tint: COLORS.green,
  },
} as const;

export type ThemeColor = 'background' | 'backgroundElement' | 'backgroundSelected';
export type ThemeTextColor = 'text' | 'textSecondary' | 'tint';

export const Spacing = {
  half: 4,
  one: 8,
  two: 12,
  three: 16,
  four: 20,
  five: 24,
  six: 32,
} as const;

export const MaxContentWidth = 960;
export const BottomTabInset = 64;