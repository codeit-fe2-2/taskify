import BasicLayout from '@/src/components/layout/BasicLayout';
import MyDashboardList from '@/src/components/mydashboard/MyDashboardList';
import NoInvitedDashboard from '@/src/components/mydashboard/NoInvitedDashboard';

export default function MyDashboardPage() {
	return (
		<BasicLayout>
			<div className='p-10 sm:p-6'>
				<div className='max-w-[1022px]'>
					<MyDashboardList />

					{0 === 0 && <NoInvitedDashboard />}
				</div>
			</div>
		</BasicLayout>
	);
}
