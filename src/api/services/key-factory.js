export const servicesKeyFactory = {
  services: ['services'],
  servicesById: id => [...servicesKeyFactory.services, id],
};
