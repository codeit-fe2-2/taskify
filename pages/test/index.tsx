import InvitedashTable from '@/src/components/ui/Table/InvitedashTable';
import InvitelistTable from '@/src/components/ui/Table/InvitelistTable';
import MemberTable from '@/src/components/ui/Table/MemberTable';
import TableLayer from '@/src/components/ui/Table/TableLayer';

import mockupData from './mockup.json';

export default function Page() {
	const membersData = mockupData.members.map((member) => ({
		id: member.id,
		nickname: member.nickname,
		profileImageUrl: member.profileImageUrl,
	}));

	const handleMemberDelete = (id: number) => {
		console.log(id);
	};

	const handleInvite = () => {
		console.log('invite button');
	};

	return (
		<div className='flex flex-col gap-6 bg-gray2 p-1'>
			<TableLayer
				tableName={'구성원'}
				needPage
				// onPrevious={ }
				// onNext={ }
			>
				<MemberTable data={membersData} onDelete={handleMemberDelete} />
			</TableLayer>
			<TableLayer
				tableName={'초대 내역'}
				needPage
				// onPrevious={}
				// onNext={}
				isInvite
				onInvite={handleInvite}
			>
				<InvitelistTable />
			</TableLayer>
			<TableLayer tableName={'초대받은 대시보드'} layerWidth='large'>
				<InvitedashTable />
			</TableLayer>
		</div>
	);
}
