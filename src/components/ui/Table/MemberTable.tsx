import TextButton from '../Button/TextButton';

interface MemberTableProps {
	data: {
		id: number;
		nickname: string;
		profileImageUrl: string;
	}[];
}

export default function MemberTable({ data }: MemberTableProps) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th className='text-left'>이름</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.map(({ id, nickname, profileImageUrl }, index) => (
						<tr
							key={id}
							className={`h-8 ${index === data.length - 1 ? '' : 'border-b border-gray2'}`}
						>
							<td className='py-2 text-left'>
								<div className='flex flex-row items-center gap-2'>
									<div
										className='size-[26px] rounded-full'
										style={{
											backgroundImage: `url(${profileImageUrl})`,
											backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
										}}
									/>
									<p>{nickname}</p>
								</div>
							</td>
							<td className='float-end py-2'>
								<TextButton buttonSize='xxs' color='secondary' textSize='sm'>
									삭제
								</TextButton>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
