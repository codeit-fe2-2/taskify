import BasicLayout from '@/src/components/layout/BasicLayout';
import InvitelistTable from '@/src/components/ui/Table/InvitelistTable';
import MemberTable from '@/src/components/ui/Table/MemberTable';

export default function DashboardEditPage() {
	return (
		<BasicLayout>
			<div className='flex flex-col gap-6 p-1'>
				<MemberTable />
				<InvitelistTable />
			</div>
		</BasicLayout>
	);
}
