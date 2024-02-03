import InvitedashTable from '@/src/components/ui/Table/InvitedashTable';
import InvitelistTable from '@/src/components/ui/Table/InvitelistTable';
import MemberTable from '@/src/components/ui/Table/MemberTable';
import TableLayer from '@/src/components/ui/Table/TableLayer';

export default function Page() {
	const handleInvite = () => {
		console.log('invite button');
	};

	return (
		<div className='flex flex-col gap-6 bg-gray2 p-1'>
			<TableLayer tableName={'구성원'} needPage>
				<MemberTable />
			</TableLayer>
			<TableLayer
				tableName={'초대 내역'}
				needPage
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
