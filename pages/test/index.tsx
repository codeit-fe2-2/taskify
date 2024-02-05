import { useRouter } from 'next/router';

import { createColumns, createDashBoard, deleteColumn } from '@/src/apis/api';
import BasicLayout from '@/src/components/layout/BasicLayout';
import ColorDotButtons from '@/src/components/ui/ColorDotButton';
import AlertModal from '@/src/components/ui/Modal/AlertModal';
import CreateModal from '@/src/components/ui/Modal/CreateModal';
import { useModal } from '@/src/contexts/ModalProvider';

import mockdata from './dashboardmock.json';
export default function MyDashboardPage() {
	const { openModal, closeModal } = useModal();
	const modalId = crypto.randomUUID();
	const router = useRouter();

	const { columnid } = router.query;
	const columnId = columnid ? parseInt(columnid as string) : 0;
	const { dashboardid } = router.query;
	const dashboardId = dashboardid ? parseInt(dashboardid as string) : 0;
	const columns = mockdata.data;

	// const handleDeleteColumn = async () => {
	// 	console.log('이 다음의 처리를 작성해주세요');
	// 	try {
	// 		await deleteColumn(columnId);
	// 		closeModal(modalId);
	// 	} catch (error) {
	// 		console.error('Error deleting column card:', error);
	// 	}
	// };
	const handleCreateDashBoard = async (
		inputValue: string,
		selectColor: string,
	) => {
		try {
			await createDashBoard(inputValue, selectColor);
		} catch (error) {
			console.error('Error deleting column card:', error);
		}
	};

	// const handleCreateColumn = async (inputValue: string) => {
	// 	try {
	// 		await createColumns(inputValue, dashboardId);
	// 	} catch (error) {
	// 		console.error('Error deleting column card:', error);
	// 	}
	// };

	const handleClickOpenModal = () => {
		// openModal(
		// 	<AlertModal
		// 		message='비밀번호가 일치하지 않습니다.'
		// 		cancelButtonName='확인'
		// 		onCancel={() => closeModal(modalId)}
		// 	/>,
		// 	modalId,
		// );
		// openModal(
		// 	<AlertModal
		// 		message='컬럼의 모든 카드가 삭제됩니다.'
		// 		cancelButtonName='취소'
		// 		secondButton={true}
		// 		onCancel={() => closeModal(modalId)}
		// 		SubmitButtonName='삭제'
		// 		onSubmit={() => handleDeleteColumn}
		// 	/>,
		// 	modalId,
		// );

		// openModal(
		// 	<CreateModal
		// 		modalSize='sm'
		// 		title='새 컬럼 생성'
		// 		subTitle='이름'
		// 		onDashBoardSubmit={handleCreateColumn}
		// 		onCancel={() => closeModal(modalId)}
		// 		columns={columns}
		// 	/>,
		// 	modalId,
		// );
		openModal(
			<CreateModal
				modalSize='lg'
				title='새로운 대시보드'
				subTitle='대시보드이름'
				onDashBoardSubmit={handleCreateDashBoard}
				onCancel={() => closeModal(modalId)}
				columns={columns}
			/>,
			modalId,
		);
		// openModal(
		// 	<ContextModal buttonText='확인' buttonClick={() => closeModal(modalId)}>
		// 		비밀번호가 일치하지 않습니다.
		// 	</ContextModal>,
		// 	modalId,
		// );
	};
	return (
		<BasicLayout>
			<button className='bg-pink' onClick={handleClickOpenModal}>
				모달 얍
			</button>
		</BasicLayout>
	);
}
