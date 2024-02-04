import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import BasicLayout from '@/src/components/layout/BasicLayout';
import IconButton from '@/src/components/ui/Button/IconButton';
import { PAGE_ROUTES } from '@/src/constants/routes';
import { useGetDashboardList } from '@/src/hooks/dashboard/useGetDashboardList';

export default function MyDashboardPage() {
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

	/**
	 * size 갯수 1페이지와 나머지를 달라지게 해야 함?
	 */
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
		fetchDashboardList();
	}, [fetchMethod]);

	return (
		<BasicLayout>
			<div className='p-10 sm:p-6'>
				<div className='max-w-[1022px]'>
					<div className='grid  grid-cols-3 grid-rows-2 gap-3 sm:grid-cols-1 sm:grid-rows-6 md:grid-cols-2 md:grid-rows-3'>
						<button className='flex items-center justify-center gap-3 rounded-lg border border-solid border-gray3 bg-white py-6'>
							<span className='font-semibold'>새로운 대시보드</span>
							<Image
								src={'/icons/plus.svg'}
								alt='플러스'
								width={22}
								height={22}
							/>
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
					<div className='mt-3 flex items-center justify-end gap-4'>
						<span className='text-sm sm:text-xs'>
							{Math.ceil(
								(dashboardListInfo?.totalCount || 0) / fetchMethod.size,
							)}{' '}
							페이지 중 {fetchMethod.page}
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
				</div>
			</div>
		</BasicLayout>
	);
}
