export type BookingAction =
  | { type: 'add'; itemId: string }
  | { type: 'remove'; itemId: string }
  | { type: 'clear' };

export function bookingReducer(
  state: readonly string[],
  action: BookingAction,
): readonly string[] {
  switch (action.type) {
    case 'add':
      return state.includes(action.itemId) ? state : [...state, action.itemId];
    case 'remove':
      return state.filter((itemId) => itemId !== action.itemId);
    case 'clear':
      return [];
  }
}
