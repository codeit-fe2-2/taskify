import InvitedashTable from '@/src/components/ui/Table/InvitedashTable';
import InvitelistTable from '@/src/components/ui/Table/InvitelistTable';
import MemberTable from '@/src/components/ui/Table/MemberTable';

export default function Page() {
	return (
		<div className='flex flex-col gap-6 bg-gray2 p-1'>
			<MemberTable />
			<InvitelistTable />
			<InvitedashTable />
			<Chips />
			<Card />
		</div>
	);
}
