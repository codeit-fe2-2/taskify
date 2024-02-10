import axiosInstance from '@/src/apis/axiosInstance';
import { ColumnModifyPutResponse } from '@/src/types/dashboard';
import { userPasswordChange } from '@/src/types/user';

export const usePutColumnName = async (
	title: string,
	columnId: number,
): Promise<ColumnModifyPutResponse> => {
	console.log(title, columnId);
	try {
		const requestData = {
			title: title,
		};

		const response = await axiosInstance.put<ColumnModifyPutResponse>(
			`columns/${columnId}`,
			requestData,
		);

		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error('비밀번호 변경 중 오류가 발생했습니다', error);
		throw error;
	}
};
