import axiosInstance from '@/src/apis/axiosInstance';
import { userPasswordChange } from '@/src/types/user';

export const userPutChangedPassword = async (
	password: string,
	newPassword: string,
): Promise<userPasswordChange> => {
	console.log(password);
	console.log(newPassword);
	try {
		const requestData = {
			password: password,
			newPassword: newPassword,
		};

		const response = await axiosInstance.put<userPasswordChange>(
			'auth/password',
			requestData,
		);

		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error('비밀번호 변경 중 오류가 발생했습니다', error);
		throw error;
	}
};
