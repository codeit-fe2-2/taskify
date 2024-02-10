import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { PAGE_ROUTES } from '@/src/constants/routes';
import { Dashboard } from '@/src/types/dashboard';

interface Props {
	dashboardList: Dashboard[] | undefined;
	currentBoardId: number;
}

export default function SideMenu({
	dashboardList = [],
	currentBoardId,
}: Props) {
	return (
		<aside className='h-screen w-[var(--side-menu-width)] shrink-0 overflow-y-auto border-r border-gray3 px-3 py-5 sm:w-[var(--side-menu-width-sm)] sm:px-3 md:w-[var(--side-menu-width-md)]'>
			<div className='mb-14 px-3 sm:mb-9 sm:px-0'>
				<Link href={PAGE_ROUTES.HOME} className='flex justify-center'>
					<Image
						src='/icons/logo.svg'
						alt=''
						width={24}
						height={28}
						className='md:hidden lg:hidden'
					/>
					<Image
						src='/icons/logo_taskify.svg'
						alt=''
						width={109}
						height={34}
						className='sm:hidden'
						priority
					/>
				</Link>
			</div>
			<nav>
				<div className='mb-4 flex items-center justify-between px-3 md:px-2'>
					<span className='text-xs font-bold text-gray5 sm:hidden'>
						Dash Boards
					</span>
					<button>
						<Image src={'/icons/add_box.svg'} width={20} height={20} alt='' />
					</button>
				</div>
				<ul className='flex flex-col justify-center sm:items-center'>
					{dashboardList.map((dashboard) => (
						<li
							key={dashboard.id}
							className={clsx(
								'rounded text-lg font-medium text-gray5',
								dashboard.id === currentBoardId && 'bg-violet1',
							)}
						>
							<Link
								href={`${PAGE_ROUTES.DASHBOARD}${dashboard.id}`}
								className='flex w-full items-center gap-4 p-3'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='8'
									height='8'
									viewBox='0 0 8 8'
									fill={dashboard.color}
									className='shrink-0'
								>
									<circle cx='4' cy='4' r='4' />
								</svg>
								<div className='flex items-center gap-[6px] sm:hidden md:gap-1'>
									<span className='inline-block truncate text-lg md:max-w-[65px] md:text-base'>
										{dashboard.title}
									</span>
									{dashboard.createdByMe && (
										<Image
											src={'/icons/crown.svg'}
											width={18}
											height={14}
											alt=''
											priority
										/>
									)}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
