import { useEffect, useState } from 'react';

import { useDeleteInviteList } from '@/src/hooks/table/useDeleteInviteList';
import { useGetInviteList } from '@/src/hooks/table/useGetInviteList';

import TextButton from '../Button/TextButton';
import TableLayer from './TableLayer';

export default function InvitelistTable() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const size = 10;

	const { inviteListInfo, execute } = useGetInviteList(currentPage, size);
	const totalCount = inviteListInfo?.totalCount;
	const inviteList = inviteListInfo?.invitations;
	const totalPages = Math.ceil(totalCount / size);

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

	const handleCancel = (invitationId: number) => {
		useDeleteInviteList(invitationId);
	};

	useEffect(() => {
		void execute();
	}, [currentPage]);

	return (
		<TableLayer
			tableName={'초대 내역'}
			needPage={{ totalPages: totalPages, currentPage: currentPage }}
			isInvite
			onPrevious={handlePrevious}
			onNext={handleNext}
			onInvite={handleInvite}
		>
			<table className='table-auto'>
				<thead>
					<tr>
						<th className='text-left'>이메일</th>
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
									onClick={() => handleCancel(data.id)}
								>
									취소
								</TextButton>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</TableLayer>
	);
}
