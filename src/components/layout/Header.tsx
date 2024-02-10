import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import axiosInstance from '@/src/apis/axiosInstance';
import TextButton from '@/src/components/ui/Button/TextButton';
import { PAGE_NAMES } from '@/src/constants/routes';
import { Dashboard } from '@/src/types/dashboard';
import { MembersResponse } from '@/src/types/table';
import { User } from '@/src/types/user';

import DefaultProfileImage from '../ui/DefaultProfileImage';

interface Props {
	currentDashboard?: Dashboard;
	user: User | null;
}

export default function Header({ currentDashboard, user }: Props) {
	const router = useRouter();
	const isDashboardPage = router.asPath.includes('/dashboard');
	const pageName = PAGE_NAMES[router.asPath] || currentDashboard?.title;

	const [membersInfo, setMembersInfo] = useState<{
		members: User[];
		totalCount: number;
	} | null>(null);
	const members = membersInfo?.members;
	const profileImgCount = useMediaQuery({ maxWidth: 1199 }) ? 2 : 4;
	const remainCount = (membersInfo?.totalCount || 0) - profileImgCount;

	useEffect(() => {
		if (isDashboardPage && currentDashboard) {
			const getMembers = async () => {
				const membersRes = await axiosInstance.get<MembersResponse>(
					`/members?dashboardId=${currentDashboard.id}`,
				);

				setMembersInfo(membersRes.data);
			};

			void getMembers();
		}
	}, [isDashboardPage, currentDashboard]);

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
					<div className='flex items-center gap-10 sm:gap-4 md:gap-8'>
						<div className='flex items-center gap-4 sm:gap-1.5 md:gap-3'>
							<Link
								href={`/dashboard/${currentDashboard?.id}/edit`}
								className='flex items-center gap-2 rounded-lg border border-gray3 px-4 py-2.5 text-gray5 sm:px-3 sm:py-1.5 sm:text-sm md:text-sm'
							>
								<Image
									src='/icons/settings.svg'
									width={20}
									height={20}
									alt=''
									className='sm:hidden'
								/>
								관리
							</Link>
							<TextButton
								type='button'
								color='third'
								onClick={() => {}}
								textSize='md'
								className='flex items-center gap-2 px-4 py-2.5 text-gray5 sm:px-3 sm:py-1.5 sm:text-sm md:text-sm'
							>
								<Image
									src='/icons/add_box.svg'
									width={20}
									height={20}
									alt=''
									className='sm:hidden'
								/>
								초대하기
							</TextButton>
						</div>
						{members && members?.length > 1 && (
							<div className='flex [&>*:not(:first-child)]:ml-[-10px]'>
								{members
									.filter((member) => member.id !== user?.id)
									.slice(0, profileImgCount)
									.map((member) =>
										member.profileImageUrl ? (
											<Image
												src={member.profileImageUrl}
												width={38}
												height={38}
												alt='프로필 사진'
												key={member.id}
												className='rounded-full border-2 border-white sm:size-[34px]'
											></Image>
										) : (
											<DefaultProfileImage
												nickname={member.nickname}
												classNames='size-[38px] border-2 border-white sm:size-[34px]'
												key={member.id}
											/>
										),
									)}
								{remainCount > 0 && (
									<div
										className={
											'flex size-[38px] items-center justify-center rounded-full border-2 border-white bg-[#F4D7DA] font-semibold text-white sm:size-[34px]'
										}
									>
										<p>+ {remainCount}</p>
									</div>
								)}
							</div>
						)}
					</div>
				)}
				<div className='mx-8 h-[38px] w-[1px] bg-gray3 sm:mx-3 sm:h-[34px] md:mx-6'></div>
				<div className='mr-20 flex items-center gap-3 sm:mr-3 md:mr-10'>
					<div
						className={
							'flex size-[38px] items-center justify-center rounded-full border-2 border-white bg-[#a3c4a2] font-semibold text-white sm:size-[34px]'
						}
					>
						<p>{user?.nickname[0].toUpperCase()}</p>
					</div>
					<span className='font-medium sm:hidden'>{user?.nickname}</span>
				</div>
			</div>
		</header>
	);
}
