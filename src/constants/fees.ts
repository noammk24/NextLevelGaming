import type { GamingExperience } from './experiences';

export type FeeSummary = {
  bookingCount: number;
  subtotal: number;
  discountRate: number;
  discountAmount: number;
  total: number;
};

export function calculateFeeSummary(
  selectedItems: readonly Pick<GamingExperience, 'priceAmount'>[],
): FeeSummary {
  const bookingCount = selectedItems.length;
  const subtotal = selectedItems.reduce((total, item) => total + item.priceAmount, 0);
  const discountRate =
    bookingCount > 3 ? 15 : bookingCount === 3 ? 10 : bookingCount === 2 ? 5 : 0;
  const discountAmount = subtotal * (discountRate / 100);

  return {
    bookingCount,
    subtotal,
    discountRate,
    discountAmount,
    total: subtotal - discountAmount,
  };
}
