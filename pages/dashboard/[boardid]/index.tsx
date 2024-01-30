import CommonLayout from '@/src/components/layout/CommonLayout';
import { useGetColumnList } from '@/src/hooks/dashboard/useGetColumnList';

export default function DashboardPage() {
	const { data: columnList } = useGetColumnList();
	return (
		<CommonLayout>
			대시보드 페이지
			<div>
				{columnList?.map((column) => <div key={column.id}>{column.title}</div>)}
			</div>
		</CommonLayout>
	);
}
