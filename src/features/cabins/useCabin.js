import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

export function useCabin() {
  const {
    data: cabins,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  return { cabins, isLoading, isError };
}
