export const createCartSlice = (set, get) => ({
  cart: [],
  setCart: cart => {
    set(() => ({cart}), false, 'setCart');
  },
  addService: (service, id, tempID) => {
    set({cart: [...get().cart, {service, id, tempID}]});
  },
  removeService: service_id => {
    set({cart: [...get().cart.filter(item => item.service.id !== service_id)]});
  },
  clearCart: () => {
    set({cart: []});
  },
});
