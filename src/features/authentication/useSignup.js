import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,

    onSuccess: () => {
      toast.success(
        'Account successfully created! Please verify the new account from the user email address! '
      );
    },
  });

  return { signup, isLoading };
}
