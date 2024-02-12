import { ColumnModifyPutResponse } from '@/src/types/dashboard';

import axiosInstance from '../axiosInstance';

export const putColumnName = async (
	title: string,
	columnId: number,
): Promise<ColumnModifyPutResponse> => {
	try {
		const requestData = {
			title: title,
		};

		const response = await axiosInstance.put<ColumnModifyPutResponse>(
			`columns/${columnId}`,
			requestData,
		);

		return response.data;
	} catch (error) {
		console.error('비밀번호 변경 중 오류가 발생했습니다', error);
		throw error;
	}
};
