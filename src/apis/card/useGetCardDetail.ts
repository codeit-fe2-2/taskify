import axiosInstance from '@/src/apis/axiosInstance';
import { Card } from '@/src/types/card';

export const useGetCardDetail = async (cardId: number) => {
	try {
		const response = await axiosInstance.get<Card>(`cards/${cardId}`);

		return response.data;
	} catch (error) {
		console.error('카드 상세를 가져오는 중 오류가 발생했습니다.', error);
		throw error;
	}
};
