import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type PropsWithChildren,
} from 'react';
import { BOOKABLE_ITEMS } from '@/constants/experiences';
import { calculateFeeSummary, type FeeSummary } from '@/constants/fees';
import { bookingReducer } from './bookingReducer';
import type { GamingExperience } from '@/constants/experiences';

type BookingContextValue = {
  selectedItems: GamingExperience[];
  summary: FeeSummary;
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearItems: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: PropsWithChildren) {
  const [selectedIds, dispatch] = useReducer(bookingReducer, []);

  const selectedItems = useMemo(
    () =>
      selectedIds.flatMap((id) => {
        const item = BOOKABLE_ITEMS.find((candidate) => candidate.id === id);
        return item ? [item] : [];
      }),
    [selectedIds],
  );
  const summary = useMemo(() => calculateFeeSummary(selectedItems), [selectedItems]);

  const addItem = useCallback((itemId: string) => {
    if (!BOOKABLE_ITEMS.some((item) => item.id === itemId)) {
      throw new Error(`Unknown bookable item: ${itemId}`);
    }

    dispatch({ type: 'add', itemId });
  }, []);

  const removeItem = useCallback(
    (itemId: string) => dispatch({ type: 'remove', itemId }),
    [],
  );
  const clearItems = useCallback(() => dispatch({ type: 'clear' }), []);

  const value = useMemo(
    () => ({ selectedItems, summary, addItem, removeItem, clearItems }),
    [selectedItems, summary, addItem, removeItem, clearItems],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const booking = useContext(BookingContext);
  if (!booking) {
    throw new Error('useBooking must be used within BookingProvider.');
  }

  return booking;
}
