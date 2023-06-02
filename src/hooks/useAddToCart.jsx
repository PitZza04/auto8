import {useMutation} from '@tanstack/react-query';

export const useAddToCart = () => {
  return useMutation(services_id => add);
};
