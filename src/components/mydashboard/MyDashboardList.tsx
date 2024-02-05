import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import IconButton from '@/src/components/ui/Button/IconButton';
import { PAGE_ROUTES } from '@/src/constants/routes';
import { useGetDashboardList } from '@/src/hooks/dashboard/useGetDashboardList';

export default function MyDashboardList() {
	const [fetchMethod, setFetchMethod] = useState({
		method: 'pagination',
		cursorId: 0,
		page: 1,
		size: 5,
	});

	const { dashboardListInfo, execute: fetchDashboardList } =
		useGetDashboardList(
			fetchMethod.method as 'pagination',
			fetchMethod.cursorId,
			fetchMethod.page,
			fetchMethod.size,
			true,
		);

	const dashboardList = dashboardListInfo?.dashboards || [];

	const isExistsNextPage =
		fetchMethod.page * fetchMethod.size < (dashboardListInfo?.totalCount || 0);

	const totalPage =
		Math.floor((dashboardListInfo?.totalCount || 0) / fetchMethod.size) + 1;

	const handleClickNextPage = () => {
		setFetchMethod((prevFetchMethod) => ({
			...prevFetchMethod,
			page: prevFetchMethod.page + 1,
		}));
	};

	const handleClickPrevPage = () => {
		setFetchMethod((prevFetchMethod) => ({
			...prevFetchMethod,
			page: prevFetchMethod.page - 1,
		}));
	};

	useEffect(() => {
		void fetchDashboardList();
	}, [fetchMethod]);

	return (
		<>
			<div className='grid auto-rows-fr grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2'>
				<button className='flex items-center justify-center gap-3 rounded-lg border border-solid border-gray3 bg-white py-6'>
					<span className='font-semibold'>새로운 대시보드</span>
					<Image src={'/icons/plus.svg'} alt='플러스' width={22} height={22} />
				</button>
				{dashboardList.map((dashboard) => (
					<Link
						key={dashboard.id}
						href={PAGE_ROUTES.DASHBOARD + dashboard.id}
						className='flex items-center justify-between rounded-lg border border-solid border-gray3 bg-white px-5'
					>
						<div className='flex items-center gap-4'>
							<div
								className={`size-[8px] rounded-full`}
								style={{ backgroundColor: dashboard.color }}
							></div>
							<span className='font-semibold'>{dashboard.title}</span>
							{dashboard.createdByMe && (
								<Image
									src={'/icons/crown.svg'}
									alt='왕관'
									width={20}
									height={16}
									className='md:h-[14px] md:w-[18px]'
								/>
							)}
						</div>
						<Image
							src={'/icons/arrowNext.svg'}
							alt='화살표'
							width={18}
							height={18}
						/>
					</Link>
				))}
			</div>
			{(dashboardListInfo?.totalCount || 0) > 0 && (
				<div className='mt-3 flex items-center justify-end gap-4 sm:mt-2 md:mt-2.5'>
					<span className='text-sm sm:text-xs'>
						{totalPage} 페이지 중 {fetchMethod.page}
					</span>
					<div>
						<IconButton
							src='/icons/arrowBefore.svg'
							alt='plus'
							iconSize={16}
							buttonSize='xs'
							rounded='left'
							disabled={fetchMethod.page === 1 ? true : false}
							onClick={handleClickPrevPage}
						/>
						<IconButton
							src='/icons/arrowNext.svg'
							alt='plus'
							iconSize={16}
							buttonSize='xs'
							rounded='right'
							disabled={!isExistsNextPage}
							onClick={handleClickNextPage}
						/>
					</div>
				</div>
			)}
		</>
	);
}
