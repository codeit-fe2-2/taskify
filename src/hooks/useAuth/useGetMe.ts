import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { User } from '@/src/types/user';

export const useGetMe = (lazy: boolean) => {
	const getMe = () => axiosInstance.get<User>('/users/me');

	const { data, execute, error, loading } = useAsync(getMe, lazy);

	return { data, execute, error, loading };
};
