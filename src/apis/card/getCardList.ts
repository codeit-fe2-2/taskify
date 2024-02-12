import axiosInstance from '@/src/apis/axiosInstance';
import { CardListData } from '@/src/types/card';

export const getCardList = async (
	size: number,
	columnId: number,
	cursorId?: number | undefined,
) => {
	try {
		const response = await axiosInstance.get<CardListData>(
			`cards?size=${size}${cursorId ? `&cursorId=${cursorId}` : ''}&columnId=${columnId}`,
		);

		return response?.data;
	} catch (error) {
		console.error('카드 목록을 가져오는 중 오류가 발생했습니다.', error);
		throw error;
	}
};
