export const createCartSlice2 = (set, get) => ({
  cartItems: [],
  addCartItems: services =>
    set({
      cartItems: [...get().cartItems, services],
    }),
  removeCartItems: service_id =>
    set({
      cartItems: [
        ...get().cartItems.filter(services => services.id !== service_id),
      ],
    }),
  resetAllCartItems: () => set({cartItems: []}),
});
