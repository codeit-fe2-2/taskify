import { UserProfileImageUpload } from '@/src/types/user';

import axiosInstance from '../axiosInstance';

export const postProfileImageURL = async (file: File | null) => {
	if (!file) return null;
	try {
		const formData = new FormData();
		formData.append('image', file);

		const response = await axiosInstance.post<UserProfileImageUpload>(
			'users/me/image',
			formData,
		);

		return response.data.profileImageUrl;
	} catch (error) {
		console.error('이미지 업로드 중 오류가 발생했습니다.', error);
		throw error;
	}
};
