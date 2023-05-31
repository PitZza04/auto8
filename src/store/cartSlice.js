export const createCartSlice = (set, get) => ({
  cartService: new Map(),

  createCart: cartId =>
    set(state => ({carts: new Map(state.carts).set(cartId, [])})),

  getCart: cartId => {
    const cart = get().carts.get(cartId);
    return cart || null;
  },

  addItemToCart: (cartId, service) =>
    set(state => {
      const updatedCarts = new Map(state.carts);
      const cartItems = updatedCarts.get(cartId);
      if (cartItems) {
        updatedCarts.set(cartId, [...cartItems, service]);
      }
      return {carts: updatedCarts};
    }),
  removeItemFromCart: (cartId, service) =>
    set(state => {
      const updatedCarts = new Map(state.carts);
      const cartItems = updatedCarts.get(cartId);
      if (cartItems) {
        const updatedItems = cartItems.filter(item => item.id !== service);
        updatedCarts.set(cartId, updatedItems);
      }
      return {carts: updatedCarts};
    }),
  clearCart: cartId =>
    set(state => {
      const updatedCarts = new Map(state.carts);
      updatedCarts.delete(cartId);
      return {carts: updatedCarts};
    }),
  // addItem: (cartId, item) => {
  //   set(state => {
  //     console.log('item', item);
  //     const updatedCarts = state.cartService.map(cart => {
  //       if (cart.cart === cartId) {
  //         return {
  //           ...cart,
  //           services: [...cart.services, {...item, services_options_link: []}],
  //         };
  //       }
  //       return cart;
  //     });

  //     return {
  //       cartService: updatedCarts,
  //     };
  //   });
  // },

  // removeItem: (cartId, itemId) => {
  //   set(state => {
  //     const updatedCarts = state.cartService.map(cart => {
  //       if (cart.cart === cartId) {
  //         const updatedServices = cart.services.filter(
  //           service => service.id !== itemId,
  //         );
  //         return {
  //           ...cart,
  //           services: updatedServices,
  //         };
  //       }
  //       return cart;
  //     });

  //     return {
  //       cartService: updatedCarts,
  //     };
  //   });
  // },
  // resetAllCartService: () => set({cartService: []}),
});
