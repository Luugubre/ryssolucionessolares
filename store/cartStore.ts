import { create } from 'zustand'

interface CartState {
  items: any[];
  addItem: (item: any) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (newItem) => set((state) => {
    // Si el producto ya está en el carrito, sumamos 1 a la cantidad
    const existing = state.items.find((i: any) => i.id === newItem.id);
    if (existing) {
      return { items: state.items.map((i: any) => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i) };
    }
    // Si es nuevo, lo agregamos con cantidad 1
    return { items: [...state.items, { ...newItem, quantity: 1 }] };
  }),
}))