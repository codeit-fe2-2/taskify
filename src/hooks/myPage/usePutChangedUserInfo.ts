import axiosInstance from '@/src/apis/axiosInstance';
import { UserInfoChange } from '@/src/types/user';

export const usePutChangedUserInfo = async (
	nickname: string,
	imageUrl: string,
) => {
	const requestData = {
		nickname: nickname,
		profileImageUrl: imageUrl,
	};
	try {
		const response = await axiosInstance.put<UserInfoChange>(
			'users/me',
			requestData,
		);
		return response;
	} catch (error) {
		console.error('사용자 정보를 업데이트하는 중 오류가 발생했습니다.', error);
		throw error;
	}
};
