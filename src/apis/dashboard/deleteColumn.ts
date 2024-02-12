import axiosInstance from '../axiosInstance';

interface useDeleteColumnProps {
	columnId: number;
}

export const deleteColumn = async (
	columnId: number,
): Promise<useDeleteColumnProps> => {
	try {
		const response = await axiosInstance.delete<useDeleteColumnProps>(
			`columns/${columnId}`,
		);

		return response.data;
	} catch (error) {
		console.error('비밀번호 변경 중 오류가 발생했습니다', error);
		throw error;
	}
};
