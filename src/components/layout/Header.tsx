import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { PAGE_NAMES } from '@/src/constants/routes';
import { Dashboard } from '@/src/types/dashboard';
import { User } from '@/src/types/user';

interface Props {
	currentDashboard?: Dashboard;
	user: User;
}

export default function Header({ currentDashboard, user }: Props) {
	const router = useRouter();
	const isDashboardPage = router.asPath.includes('/dashboard');
	const pageName = PAGE_NAMES[router.asPath] || currentDashboard?.title;

	return (
		<header
			className={clsx(
				'flex h-[var(--header-height)] items-center justify-between border-b border-gray3 sm:h-[var(--header-height-sm)]',
				isDashboardPage && 'sm:justify-around md:justify-around',
			)}
		>
			<div
				className={clsx(
					'ml-10 flex gap-2 text-xl font-bold text-black2',
					isDashboardPage && 'sm:hidden md:hidden',
				)}
			>
				<span>{pageName}</span>
				{currentDashboard?.createdByMe && (
					<Image
						src={'/icons/crown.svg'}
						width={18}
						height={14}
						alt=''
						priority
					/>
				)}
			</div>
			<div className='flex items-center'>
				{isDashboardPage && (
					<div className='flex'>
						<div className='mr-10'>버튼들</div>
						<div>초대 인원</div>
					</div>
				)}
				<div className='mx-8 h-[38px] w-[1px] bg-gray3 sm:mx-3 sm:h-[34px] md:mx-6'></div>
				<div className='mr-20 flex gap-3 sm:mr-3 md:mr-10'>
					<div>B</div>
					<span className='font-medium sm:hidden'>배유철</span>
				</div>
			</div>
		</header>
	);
}
