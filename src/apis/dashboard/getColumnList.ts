import { useRouter } from 'next/router';
import { useEffect } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { ColumnListGetResponse } from '@/src/types/dashboard';

export const getColumnList = () => {
	const router = useRouter();
	const { boardid } = router.query;
	const dashboardId = boardid as string;
	const getColumnLists = () =>
		axiosInstance.get<ColumnListGetResponse>(
			`/columns?dashboardId=${boardid as string}`,
		);

	const { data, execute } = useAsync(getColumnLists, false);

	useEffect(() => {
		if (boardid) {
			void execute();
		}
	}, [boardid]);

	return { data: data?.data, execute, dashboardId };
};
