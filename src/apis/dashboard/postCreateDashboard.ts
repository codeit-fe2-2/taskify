import axiosInstance from '../axiosInstance';
interface CreateDashboardPostResponse {
	id: number;
	title: string;
	color: string;
	createdAt: string;
	updatedAt: string;
	userId: number;
	createdByMe: boolean;
}
export const postCreateDashboard = async (
	inputValue: string,
	selectColor: string,
) => {
	const requestData = {
		title: inputValue,
		color: selectColor,
	};
	try {
		const response = await axiosInstance.post<CreateDashboardPostResponse>(
			'/dashboards',
			requestData,
		);

		return response.data;
	} catch (error) {
		console.error('대시보드 생성 중 오류가 발생했습니다.', error);
		throw error;
	}
};
