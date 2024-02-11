import { userPasswordChange } from '@/src/types/user';

import axiosInstance from '../axiosInstance';

export const putChangedPassword = async (
	password: string,
	newPassword: string,
): Promise<userPasswordChange> => {
	try {
		const requestData = {
			password: password,
			newPassword: newPassword,
		};

		const response = await axiosInstance.put<userPasswordChange>(
			'auth/password',
			requestData,
		);

		return response.data;
	} catch (error) {
		console.error('비밀번호 변경 중 오류가 발생했습니다', error);
		throw error;
	}
};
