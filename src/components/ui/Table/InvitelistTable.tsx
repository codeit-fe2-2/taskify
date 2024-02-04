import { useDeleteInviteList } from '@/src/hooks/table/useDeleteInviteList';
import { useGetInviteList } from '@/src/hooks/table/useGetInviteList';

import TextButton from '../Button/TextButton';
import TableLayer from './TableLayer';

export default function InvitelistTable() {
	// API 가져오는 코드
	const dashboardId = 2716; // dashboardId...인데 이걸 어떻게 불러올지가 고민입니다. useRoute 써야하겠죠?
	const { inviteListInfo, execute } = useGetInviteList(dashboardId);
	const totalCount = inviteListInfo?.totalCount;
	const inviteList = inviteListInfo?.invitations;

	const handlePrevious = () => {
		alert('이전 페이지로');
	};

	const handleNext = () => {
		alert('다음 페이지로');
	};

	const handleInvite = () => {
		alert('초대하기');
	};

	const handleCancel = (invitationId: number) => {
		useDeleteInviteList(dashboardId, invitationId);
	};

	return (
		<TableLayer
			tableName={'초대 내역'}
			needPage
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
