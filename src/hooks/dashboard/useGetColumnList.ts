import { useRouter } from 'next/router';
import { useEffect } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { ColumnListGetResponse } from '@/src/types/dashboard';

export const useGetColumnList = () => {
	const router = useRouter();
	const { boardid } = router.query;

	const getColumnList = () =>
		axiosInstance.get<ColumnListGetResponse>(
			`/columns?dashboardId=${boardid as string}`,
		);

	const { data, execute } = useAsync(getColumnList, true);

	useEffect(() => {
		if (boardid) {
			void execute();
		}
	}, [boardid]);
	return { data: data?.data };
};
