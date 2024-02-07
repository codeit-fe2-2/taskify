import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { User } from '@/src/types/user';

export const useGetMe = () => {
	const getUserInfo = () => axiosInstance.get<User>(`users/me`);

	const { data, execute } = useAsync(getUserInfo);

	return { userInfo: data, execute };
};
