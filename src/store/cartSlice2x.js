export const createCartSlice2 = (set, get) => ({
  carts: [],
  createCart: cartId => {
    set(state => ({
      carts: {
        ...state.carts,
        [cartId]: {cartId, items: []},
      },
    }));
  },
  getCart: cartId => {
    const cart = get().carts[cartId];
    return cart || null;
  },

  addCartItem: (cartId, item) => {
    set(state => {
      const cart = state.carts[cartId];
      if (cart) {
        const updatedCart = {
          ...cart,
          items: [...cart.items, item],
        };
        return {
          carts: {
            ...state.carts,
            [cartId]: updatedCart,
          },
        };
      }
      return state;
    });
  },

  removeCartItem: (cartId, itemId) => {
    set(state => {
      const cart = state.carts[cartId];
      if (cart) {
        const updatedItems = cart.items.filter(item => item.id !== itemId);
        const updatedCart = {
          ...cart,
          items: updatedItems,
        };
        return {
          carts: {
            ...state.carts,
            [cartId]: updatedCart,
          },
        };
      }
      return state;
    });
  },

  resetAllCartItems: () => set({carts: []}),
});
