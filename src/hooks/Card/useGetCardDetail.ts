import axiosInstance from '@/src/apis/axiosInstance';
import { Card } from '@/src/types/card';

export const useGetCardDetail = async (cardId: number) => {
	try {
		const response = await axiosInstance.get<Card>(`cards/${cardId}`);
		return response.data;
	} catch (error) {
		console.error('카드 상세를 가져오던 도중 에러가 발생하였습니다');
		throw error;
	}
};
