import BasicLayout from '@/src/components/layout/BasicLayout';
import MyDashboardList from '@/src/components/mydashboard/MyDashboardList';
import InvitedashTable from '@/src/components/ui/Table/InvitedashTable';

export default function MyDashboardPage() {
	return (
		<BasicLayout>
			<div className='p-10 sm:p-6'>
				<div className='max-w-[1022px]'>
					<MyDashboardList />
					<InvitedashTable />
				</div>
			</div>
		</BasicLayout>
	);
}
