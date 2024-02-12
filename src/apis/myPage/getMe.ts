import { useAsync } from '@/src/hooks/useAsync';
import { User } from '@/src/types/user';

import axiosInstance from '../axiosInstance';

export const getMe = () => {
	const getUserInfo = () => axiosInstance.get<User>(`users/me`);

	const { data, execute } = useAsync(getUserInfo);

	return { userInfo: data, execute };
};
