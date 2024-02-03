import { useDeleteMembers } from '@/src/hooks/table/useDeleteMembers';
import { useGetMembers } from '@/src/hooks/table/useGetMembers';

import TextButton from '../Button/TextButton';
import TableLayer from './TableLayer';

export default function MemberTable() {
	const dashboardId = 2716;
	const { membersInfo, execute } = useGetMembers(dashboardId);
	const members = membersInfo?.members;
	const totalCount = membersInfo?.totalCount;

	const handlePrevious = () => {
		alert('이전 페이지로');
	};

	const handleNext = () => {
		alert('다음 페이지로');
	};

	const handleDelete = (memberId: number) => {
		useDeleteMembers(memberId);
	};

	return (
		<TableLayer
			tableName={'구성원'}
			needPage
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
