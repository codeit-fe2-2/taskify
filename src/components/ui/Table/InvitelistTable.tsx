import Image from 'next/image';
import { useState } from 'react';

import { useDeleteInviteList } from '@/src/hooks/table/useDeleteInviteList';
import { useGetInviteList } from '@/src/hooks/table/useGetInviteList';

import TextButton from '../Button/TextButton';
import TableLayer from './TableLayer';

export default function InvitelistTable() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const size = 10;

	const { inviteListInfo, execute: executeGet } = useGetInviteList(
		currentPage,
		size,
	);
	const totalCount = inviteListInfo?.totalCount as number;
	const inviteList = inviteListInfo?.invitations;
	const totalPages = Math.ceil(totalCount / size);

	const { execute: executeDelete } = useDeleteInviteList();

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	const handleInvite = () => {
		alert('초대하기');
	};

	const handleCancel = (invitationId: string) => {
		try {
			void executeDelete(invitationId).then(executeGet);
		} catch (error) {
			console.error('Error deleting member:', error);
		}
	};

	return (
		<TableLayer
			tableName={'초대 내역'}
			needPage={{ totalPages: totalPages, currentPage: currentPage }}
			isInvite
			onPrevious={handlePrevious}
			onNext={handleNext}
			onInvite={handleInvite}
		>
			{inviteList?.length > 0 ? (
				<table className='table-auto'>
					<thead>
						<tr>
							<th className='text-left text-base font-normal text-gray4'>
								이메일
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{inviteList?.map((data, index) => (
							<tr
								key={data.id}
								className={`h-8 ${index !== inviteList.length - 1 && 'border-b border-gray2'}`}
							>
								<td className='py-2 text-left'>{data.invitee.email}</td>
								<td className='float-end py-2'>
									<TextButton
										buttonSize='xxs'
										color='secondary'
										textSize='sm'
										onClick={() => handleCancel(String(data.id))}
									>
										취소
									</TextButton>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className='flex h-[300px] flex-col items-center justify-center gap-3'>
					<div className='relative size-[100px] sm:size-[60px]'>
						<Image
							src={'/icons/unsubscribe.svg'}
							fill={true}
							alt='아직 초대한 멤버가 없어요'
						/>
					</div>
					<p className='text-lg font-normal text-gray4'>
						아직 초대한 멤버가 없어요
					</p>
				</div>
			)}
		</TableLayer>
	);
}
