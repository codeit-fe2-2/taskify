import { useRouter } from 'next/router';

import axiosInstance from '@/src/apis/axiosInstance';
import { ColumnListGetResponse } from '@/src/types/dashboard';

// eslint-disable-next-line @typescript-eslint/require-await
export const usecolumnistget = async () => {
	const router = useRouter();
	const { boardid } = router.query;

	try {
		const response = await axiosInstance.get<ColumnListGetResponse>(
			`/columns?dashboardId=${boardid as string}`,
		);

		return response.data.data;
	} catch (error) {
		console.error('컬럼 생성 중 오류가 발생했습니다.', error);
		throw error;
	}
};
