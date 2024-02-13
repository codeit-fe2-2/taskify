import Image from 'next/image';
import { useState } from 'react';

import TextButton from '@/src/components/ui/Button/TextButton';
import { useGetInviteDash } from '@/src/hooks/table/useGetInvitedash';
import { usePutInviteDash } from '@/src/hooks/table/usePutInviteDash';

export default function InvitedDashboardTable() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const { inviteDashInfo, execute: executeGet } = useGetInviteDash(searchTerm);

	const inviteDashes = inviteDashInfo?.invitations;

	const { execute: executePut } = usePutInviteDash();

	const handleAccept = (invitationId: string, inviteAccepted: boolean) => {
		try {
			void executePut(invitationId, inviteAccepted).then(executeGet);
		} catch (error) {
			console.error('Error putting member:', error);
		}
	};

	return (
		<div className='rounded-lg bg-white px-7 py-8'>
			<span className='mb-5 inline-block text-2xl font-bold sm:text-xl'>
				초대받은 대시보드
			</span>
			{(inviteDashes?.length || 0) > 0 || searchTerm ? (
				<>
					<div className='relative mb-6 flex h-10 flex-row gap-2 rounded-lg border border-solid border-gray3 p-1 sm:h-9'>
						<Image
							src={'/icons/search.svg'}
							width={24}
							height={24}
							alt='검색'
						/>
						<input
							type='text'
							placeholder='검색'
							className='size-full text-base outline-none sm:text-sm'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div className='flex flex-col text-base font-normal'>
						<div className='flex flex-row py-2 text-gray4 sm:hidden'>
							<div className='w-1/3'>이름</div>
							<div className='w-1/3'>초대자</div>
							<div className='w-1/3'>수락 여부</div>
						</div>
						<div>
							{inviteDashes?.map((inviteDash, index) => (
								<div
									key={inviteDash.id}
									className={`${index === inviteDashes.length - 1 ? 'flex flex-row  py-2 sm:flex-col' : 'flex flex-row border-b border-gray2 py-2 sm:flex-col'}`}
								>
									<div className='flex w-1/3 flex-row items-center gap-2 sm:w-full sm:py-2'>
										<p className='hidden w-1/4 text-gray4 sm:inline-block'>
											이름
										</p>
										<p>{inviteDash.dashboard.title}</p>
									</div>
									<div className='flex w-1/3 flex-row items-center gap-2 sm:w-full sm:py-2'>
										<p className='hidden w-1/4 text-gray4 sm:inline-block'>
											초대자
										</p>
										<p>{inviteDash.inviter.nickname}</p>
									</div>
									<div className='flex w-1/3 flex-row items-center gap-1 sm:w-full sm:py-2'>
										<TextButton
											buttonSize='xxs'
											className='w-full text-sm md:px-[23.5px] md:py-[6.5px]'
											color='primary'
											textSize='sm'
											onClick={() => handleAccept(String(inviteDash.id), true)}
										>
											수락
										</TextButton>
										<TextButton
											buttonSize='xxs'
											className='w-full text-sm md:px-[23.5px] md:py-[6.5px]'
											color='secondary'
											textSize='sm'
											onClick={() => handleAccept(String(inviteDash.id), false)}
										>
											취소
										</TextButton>
									</div>
								</div>
							))}
						</div>
					</div>
				</>
			) : (
				<div className='flex h-[300px] flex-col items-center justify-center gap-3'>
					<div className='relative size-[100px] sm:size-[60px]'>
						<Image
							src={'/icons/unsubscribe.svg'}
							fill={true}
							alt='아직 초대받은 대시보드가 없어요'
							className='sm:size-[60px]'
						/>
					</div>
					<p className='text-lg font-normal text-gray4 sm:text-sm'>
						아직 초대받은 대시보드가 없어요
					</p>
				</div>
			)}
		</div>
	);
}
