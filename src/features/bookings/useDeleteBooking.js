import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking } from '../../services/apiBookings';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: bookingDelete, isLoading: isDeleteBookingLoading } =
    useMutation({
      mutationFn: deleteBooking,

      onSuccess: () => {
        toast.success(`Booking successfully deleted`);
        queryClient.invalidateQueries({ active: true });
      },

      onError: () => {
        toast.error('There was an error while delete booking');
      },
    });

  return { bookingDelete, isDeleteBookingLoading };
}
