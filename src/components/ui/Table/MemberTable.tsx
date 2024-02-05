import { useEffect, useState } from 'react';

import { useDeleteMembers } from '@/src/hooks/table/useDeleteMembers';
import { useGetMembers } from '@/src/hooks/table/useGetMembers';

import TextButton from '../Button/TextButton';
import TableLayer from './TableLayer';

export default function MemberTable() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const size = 10;

	const { membersInfo, execute } = useGetMembers(currentPage, size);
	const members = membersInfo?.members;
	const totalCount = membersInfo?.totalCount;
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

	const handleDelete = (memberId: number) => {
		useDeleteMembers(memberId);
	};

	useEffect(() => {
		void execute();
	}, [currentPage]);

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
						<th className='text-left'>이름</th>
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
									<div
										className='size-[26px] rounded-full'
										style={{
											backgroundImage: `url(${member.profileImageUrl})`,
											backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
										}}
									/>
									<p>{member.nickname}</p>
								</div>
							</td>
							<td className='float-end py-2'>
								<TextButton
									buttonSize='xxs'
									color='secondary'
									textSize='sm'
									onClick={() => handleDelete(member.id)}
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
