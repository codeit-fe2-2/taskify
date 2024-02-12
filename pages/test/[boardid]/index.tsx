import BasicLayout from '@/src/components/layout/BasicLayout';
import CardDetails from '@/src/components/ui/Modal/CardDetails';
export default function MyDashboardPage() {
	return (
		<BasicLayout>
			<CardDetails cardId={2784} />
		</BasicLayout>
	);
}
