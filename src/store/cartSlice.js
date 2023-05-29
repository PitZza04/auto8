import supabaseClient from '../utils/supabaseClient';

export const createCartSlice = (set, get) => ({
  servicesInCart: [],
  actions: {
    addCartItems: services =>
      set({
        servicesInCart: [...get().servicesInCart, services],
      }),
    removeCartItems: service_id =>
      set({
        servicesInCart: [
          ...get().servicesInCart.filter(
            services => services.id !== service_id,
          ),
        ],
      }),
    resetAllCartItems: () => set({servicesInCart: []}),
  },
});
