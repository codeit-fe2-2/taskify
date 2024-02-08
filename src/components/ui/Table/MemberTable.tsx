import Image from 'next/image';
import { useState } from 'react';

import { useDeleteMembers } from '@/src/hooks/table/useDeleteMembers';
import { useGetMembers } from '@/src/hooks/table/useGetMembers';

import TextButton from '../Button/TextButton';
import DefaultProfileImage from '../DefaultProfileImage';
import TableLayer from './TableLayer';

export default function MemberTable() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const size = 10;

	const { membersInfo, execute: executeGet } = useGetMembers(currentPage, size);
	const members = membersInfo?.members;
	const totalCount = membersInfo?.totalCount as number;
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

	const { execute: executeDelete } = useDeleteMembers();

	const handleDelete = (memberId: string) => {
		try {
			void executeDelete(memberId).then(executeGet);
		} catch (error) {
			console.error('Error deleting member:', error);
		}
	};

	return (
		<TableLayer
			tableName={'구성원'}
			needPage={{ totalPages: totalPages, currentPage: currentPage }}
			onPrevious={handlePrevious}
			onNext={handleNext}
		>
			<table>
				<thead>
					<tr>
						<th className='text-left text-base font-normal text-gray4'>이름</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{members?.map((member, index) => (
						<tr
							key={member.id}
							className={`h-8 ${index === members.length - 1 ? '' : 'border-b border-gray2'}`}
						>
							<td className='py-2 text-left'>
								<div className='flex flex-row items-center gap-2'>
									{member.profileImageUrl ? (
										<Image
											src={member.profileImageUrl}
											alt='Profile Image'
											width={26}
											height={26}
											className='size-[26px] rounded-full'
										/>
									) : (
										<DefaultProfileImage
											nickname={member.nickname}
											classNames='size-[26px] text-base text-center'
										/>
									)}

									<p>{member.nickname}</p>
								</div>
							</td>
							<td className='float-end py-2'>
								<TextButton
									buttonSize='xxs'
									color='secondary'
									textSize='sm'
									disabled={member.isOwner ? true : false}
									onClick={() => void handleDelete(String(member.id))}
								>
									삭제
								</TextButton>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</TableLayer>
	);
}
