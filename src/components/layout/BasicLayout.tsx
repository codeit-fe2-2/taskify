import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Header from '@/src/components/layout/header/Header';
import SideMenu from '@/src/components/layout/SideMenu';
import { useGetDashboardList } from '@/src/hooks/dashboard/useGetDashboardList';
import { useGetMe } from '@/src/hooks/useAuth/useGetMe';

export default function BaicLayout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const { boardid } = router.query;
	const boardId = boardid ? parseInt(boardid as string) : 0;
	const { data: user } = useGetMe(false);

	const { dashboardListInfo } = useGetDashboardList(
		'pagination',
		0,
		1,
		15,
		false,
	);
	const dashboards = dashboardListInfo?.dashboards;
	const currentDashboard = dashboards?.find(
		(dashboard) => dashboard.id === boardId,
	);

	return (
		<div className='flex'>
			<SideMenu dashboardList={dashboards} currentBoardId={boardId} />
			<div className='w-[calc(100vw-var(--side-menu-width))] sm:w-[calc(100vw-var(--side-menu-width-sm))] md:w-[calc(100vw-var(--side-menu-width-md))]'>
				<Header currentDashboard={currentDashboard} user={user} />
				<main className='h-[calc(100vh-var(--header-height))] bg-gray1 sm:h-[calc(100vh-var(--header-height-sm))]'>
					{children}
				</main>
			</div>
		</div>
	);
}
