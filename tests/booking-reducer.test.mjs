import assert from 'node:assert/strict';
import test from 'node:test';
import { bookingReducer } from '../src/state/bookingReducer.ts';

test('adding a booking preserves order and ignores duplicate item ids', () => {
  const first = bookingReducer([], { type: 'add', itemId: 'vip' });
  const second = bookingReducer(first, { type: 'add', itemId: 'vr' });
  const duplicate = bookingReducer(second, { type: 'add', itemId: 'vip' });

  assert.deepEqual(duplicate, ['vip', 'vr']);
});

test('removing and clearing items updates the selected booking', () => {
  const selected = ['vip', 'vr', 'racing'];
  const removed = bookingReducer(selected, { type: 'remove', itemId: 'vr' });

  assert.deepEqual(removed, ['vip', 'racing']);
  assert.deepEqual(bookingReducer(removed, { type: 'clear' }), []);
});
