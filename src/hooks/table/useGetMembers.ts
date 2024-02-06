import { useRouter } from 'next/router';
import { useEffect } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { MembersResponse } from '@/src/types/table';

export const useGetMembers = (page: number, size: number) => {
	const router = useRouter();
	const boardid = router.query?.boardid as string;
	const getMembers = () =>
		axiosInstance.get<MembersResponse>(
			`/members?page=${page}&size=${size}&dashboardId=${boardid}`,
		);

	const { data, execute } = useAsync(getMembers, true);

	useEffect(() => {
		void execute();
	}, [boardid]);

	return { membersInfo: data, execute };
};
