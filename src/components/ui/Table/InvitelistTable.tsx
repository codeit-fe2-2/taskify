import TextButton from '../Button/TextButton';

interface DataType {
	id: number;
	inviteeEmail: string;
}

interface InvitelistTableProps {
	data: DataType[];
	onCancel: (id: number) => void;
}

export default function InvitelistTable({
	data,
	onCancel,
}: InvitelistTableProps) {
	return (
		<>
			<table className='table-auto'>
				<thead>
					<tr>
						<th className='text-left'>이메일</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.map(({ id, inviteeEmail }, index) => (
						<tr
							key={id}
							className={`h-8 ${index !== data.length - 1 && 'border-b border-gray2'}`}
						>
							<td className='py-2 text-left'>{inviteeEmail}</td>
							<td className='float-end py-2'>
								<TextButton
									buttonSize='xxs'
									color='secondary'
									textSize='sm'
									onClick={() => onCancel(id)}
								>
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
