
export const COLORS = {
  blue: '#170398',
  green: '#5ACF29',
  cyan: '#0499B1',
  grey: '#D9D9D9',
  white: '#FFFFFF',
  lightGrey: '#F5FAFD',
  darkText: '#333333',
  mutedText: '#667085',
  background: '#FFFFFF',
  card: '#FFFFFF',
  paleBlue: '#F5FAFD',
  paleGreen: '#EDF8E8',
  border: '#D9D9D9',
};

export const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export const RADIUS = {
  small: 12,
  medium: 14,
  large: 16,
  pill: 24,
};

export const FONT_FAMILY = {
  regular: 'Inter_400Regular',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
  extraBold: 'Inter_800ExtraBold',
} as const;

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