import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateFeeSummary } from '../src/constants/fees.ts';

const items = (...prices) => prices.map((priceAmount) => ({ priceAmount, type: 'package' }));

test('one booking receives no discount', () => {
  assert.deepEqual(calculateFeeSummary(items(1500)), {
    bookingCount: 1,
    subtotal: 1500,
    discountRate: 0,
    discountAmount: 0,
    total: 1500,
  });
});

test('two bookings receive a five percent discount', () => {
  const summary = calculateFeeSummary(items(1500, 750));

  assert.equal(summary.discountRate, 5);
  assert.equal(summary.discountAmount, 112.5);
  assert.equal(summary.total, 2137.5);
});

test('three bookings match the required R3,000 example', () => {
  const summary = calculateFeeSummary(items(1500, 750, 750));

  assert.equal(summary.subtotal, 3000);
  assert.equal(summary.discountRate, 10);
  assert.equal(summary.discountAmount, 300);
  assert.equal(summary.total, 2700);
});

test('more than three bookings receive a fifteen percent discount', () => {
  const summary = calculateFeeSummary(items(1500, 1500, 750, 750));

  assert.equal(summary.discountRate, 15);
  assert.equal(summary.discountAmount, 675);
  assert.equal(summary.total, 3825);
});
