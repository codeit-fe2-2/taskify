import axiosInstance from '@/src/apis/axiosInstance';
import { UserProfileImageUpload } from '@/src/types/user';

export const usePostProfileImageURL = async (file: File | null) => {
	if (!file) return null;
	try {
		const formData = new FormData();
		formData.append('image', file);

		const response = await axiosInstance.post<UserProfileImageUpload>(
			'users/me/image',
			formData,
		);
		console.log(response.data.profileImageUrl);
		return response.data.profileImageUrl; // 이미지 URL이 포함된 객체 반환
	} catch (error) {
		console.error('이미지 업로드 중 오류가 발생했습니다.', error);
		throw error;
	}
};
