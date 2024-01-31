import BasicLayout from '@/src/components/layout/BasicLayout';
import { useGetColumnList } from '@/src/hooks/dashboard/useGetColumnList';

export default function DashboardPage() {
	const { data: columnList } = useGetColumnList();
	return (
		<BasicLayout>
			대시보드 페이지
			<div>
				{columnList?.map((column) => <div key={column.id}>{column.title}</div>)}
			</div>
		</BasicLayout>
	);
}
