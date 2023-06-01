export const getUnsyncCart = services => {
  return services.filter(
    service =>
      (service.tempID !== undefined || service.tempID !== null) &&
      (service.id === undefined || service.id === null),
  );
};
