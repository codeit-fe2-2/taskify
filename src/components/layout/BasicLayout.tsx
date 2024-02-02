import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Header from '@/src/components/layout/Header';
import SideMenu from '@/src/components/layout/SideMenu';
import { useGetDashboardList } from '@/src/hooks/dashboard/useGetDashboardList';

export default function BaicLayout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const { boardid } = router.query;
	const boardId = boardid ? parseInt(boardid as string) : 0;

	const { dashboardListInfo, execute } = useGetDashboardList();
	const dashboards = dashboardListInfo?.dashboards;
	const cursorId = dashboardListInfo?.cursorId;
	const currentDashboard = dashboards?.find(
		(dashboard) => dashboard.id === boardId,
	);

	return (
		<div className='flex'>
			<SideMenu
				dashboardList={dashboards}
				cursorId={cursorId}
				currentBoardId={boardId}
			/>
			<div className='grow'>
				<Header currentDashboard={currentDashboard} />
				<main>{children}</main>
			</div>
		</div>
	);
}
