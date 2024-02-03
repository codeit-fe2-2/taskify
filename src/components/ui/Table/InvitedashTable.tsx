import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useGetInviteDash } from '@/src/hooks/table/useGetInviteDash';
import { usePutInviteDash } from '@/src/hooks/table/usePutInviteDash';

import TextButton from '../Button/TextButton';

export default function InvitedashTable() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	// 검색된 초대된 대시보드
	const { inviteDashInfo, execute } = useGetInviteDash(searchTerm);
	// 전체 초대된 대시보드 유무
	const [isInviteDash, setIsInviteDash] = useState<boolean>(!inviteDashInfo);

	useEffect(() => {
		execute();
	}, [searchTerm]);

	const inviteDashes = inviteDashInfo?.invitations;
	// const cursorId = inviteDashInfo?.cursorId; // 아직 쓰는 법 모름...

	const handleAccept = (invitationId: number, inviteAccepted: boolean) => {
		usePutInviteDash({ invitationId, inviteAccepted });
		setIsInviteDash(!inviteDashInfo);
	};

	return (
		<>
			{isInviteDash ? (
				<>
					<div className='relative flex h-10 flex-row gap-2 rounded-md border border-solid border-gray3 p-1'>
						<Image
							src={'/icons/search.svg'}
							width={24}
							height={24}
							alt='검색'
						/>
						<input
							type='text'
							placeholder='검색'
							className='size-full outline-none'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<table className='table-fixed'>
						<thead>
							<tr>
								<th className='w-52 text-left'>이름</th>
								<th className='text-left'>초대자</th>
								<th className='w-[200px] text-left'>수락 여부</th>
							</tr>
						</thead>
						<tbody>
							{inviteDashes?.map((inviteDash, index) => (
								<tr
									key={inviteDash.id}
									className={`h-8 ${index === inviteDashes.length - 1 ? '' : 'border-b border-gray2'}`}
								>
									<td className='py-2 text-left'>
										<span>{inviteDash.dashboard.title}</span>
									</td>
									<td className='py-2 text-left'>
										{inviteDash.inviter.nickname}
									</td>
									<td className='py-2'>
										<div className='flex flex-row gap-1'>
											<TextButton
												buttonSize='xxs'
												color='primary'
												textSize='sm'
												onClick={() => handleAccept(inviteDash.id, true)}
											>
												수락
											</TextButton>
											<TextButton
												buttonSize='xxs'
												color='secondary'
												textSize='sm'
												onClick={() => handleAccept(inviteDash.id, false)}
											>
												취소
											</TextButton>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<div className='flex h-[300px] flex-col items-center justify-center gap-3'>
					<div className='relative size-[100px] sm:size-[60px]'>
						<Image
							src={'/icons/unsubscribe.svg'}
							fill={true}
							alt='아직 초대받은 대시보드가 없어요'
						/>
					</div>
					<p className='text-lg font-normal text-gray4'>
						아직 초대받은 대시보드가 없어요
					</p>
				</div>
			)}
		</>
	);
}
