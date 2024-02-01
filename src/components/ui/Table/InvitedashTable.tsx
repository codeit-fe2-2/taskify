import TextButton from '../Button/TextButton';

interface DataType {
	id: number;
	dashboardTitle: string;
	inviterNickname: string;
}

interface InvitedashTableProps {
	data: DataType[];
}

export default function InvitedashTable({ data }: InvitedashTableProps) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th className='text-left'>이름</th>
						<th className='text-left'>초대자</th>
						<th className='text-right'>수락 여부</th>
					</tr>
				</thead>
				<tbody>
					{data.map(({ id, dashboardTitle, inviterNickname }, index) => (
						<tr
							key={id}
							className={`h-8 ${index === data.length - 1 ? '' : 'border-b border-gray2'}`}
						>
							<td className='py-2 text-left'>
								<div className='flex flex-row items-center gap-1'>
									<div className='size-2 rounded-full bg-violet2' />
									<span>{dashboardTitle}</span>
								</div>
							</td>
							<td className='py-2 text-left'>{inviterNickname}</td>
							<td className='float-end py-2'>
								<TextButton buttonSize='xxs' color='primary' textSize='sm'>
									수락
								</TextButton>
								<TextButton buttonSize='xxs' color='secondary' textSize='sm'>
									취소
								</TextButton>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
