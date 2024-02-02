import Image from 'next/image';
import { useState } from 'react';

import TextButton from '../Button/TextButton';

interface DataType {
	id: number;
	dashboardTitle: string;
	inviterNickname: string;
}

interface InvitedashTableProps {
	data: DataType[];
	onAccept: (id: number) => void;
	onCancel: (id: number) => void;
}

export default function InvitedashTable({
	data,
	onAccept,
	onCancel,
}: InvitedashTableProps) {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const filteredData = data.filter(
		(item) =>
			item.dashboardTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.inviterNickname.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<>
			<div className='relative flex h-10 flex-row gap-2 rounded-md border border-solid border-gray3 p-1'>
				<Image src={'/icons/search.svg'} width={24} height={24} alt='검색' />
				<input
					type='text'
					placeholder='검색'
					className='size-full outline-none'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<table className='table-auto'>
				<thead>
					<tr>
						<th className='text-left'>이름</th>
						<th className='text-left'>초대자</th>
						<th className='text-left'>수락 여부</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map(
						({ id, dashboardTitle, inviterNickname }, index) => (
							<tr
								key={id}
								className={`h-8 ${index === filteredData.length - 1 ? '' : 'border-b border-gray2'}`}
							>
								<td className='py-2 text-left'>
									<div className='flex flex-row items-center gap-1'>
										<div className='size-2 rounded-full bg-violet2' />
										<span>{dashboardTitle}</span>
									</div>
								</td>
								<td className='py-2 text-left'>{inviterNickname}</td>
								<td className='py-2'>
									<div className='flex flex-row gap-1'>
										<TextButton
											buttonSize='xxs'
											color='primary'
											textSize='sm'
											onClick={() => onAccept(id)}
										>
											수락
										</TextButton>
										<TextButton
											buttonSize='xxs'
											color='secondary'
											textSize='sm'
											onClick={() => onCancel(id)}
										>
											취소
										</TextButton>
									</div>
								</td>
							</tr>
						),
					)}
				</tbody>
			</table>
		</>
	);
}
