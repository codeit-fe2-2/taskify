import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { deleteData } from '@/src/apis/api';
import AlertModal from '@/src/components/ui/Modal/AlertModal';
import CreateModal from '@/src/components/ui/Modal/CreateModal';

import mockdata from '../../dashboardmock.json';
export default function Page() {
	const [modalOpen, setModalOpen] = useState(false);
	const router = useRouter();
	const { columnid } = router.query;
	const columnId = columnid ? parseInt(columnid as string) : 0;
	const handleModalState = () => {
		setModalOpen(!modalOpen);
	};
	// const handleCreateDashBoard = (inputValue: string, selectColor: string) => {
	// 	console.log(inputValue, selectColor);
	// };
	// const handleCreateColumn = (inputValue: string) => {
	// 	console.log(inputValue);
	// };
	const handleDeleteColumnCard = async () => {
		try {
			await deleteData(columnId);
			setModalOpen((prevModalOpen) => !prevModalOpen);
		} catch (error) {
			console.error('Error deleting column card:', error);
		}
	};
	return (
		<>
			<div className='font-bold text-orange'>테스트 페이지!</div>
			<button onClick={handleModalState}>모달오픈</button>

			{modalOpen && (
				<AlertModal
					message='컬럼의 모든 카드가 삭제됩니다.'
					content='취소'
					submitButton={true}
					submitContent='삭제'
					onCancel={handleModalState}
					onSubmit={handleDeleteColumnCard}
				/>
			)}
			{/* {modalOpen && (
				<CreateModal
					modalSize='sm'
					title='새 컬럼 생성'
					subTitle='이름'
					// onClick={handleModalClose}
					onCancel={handleModalState}
					onColumnSubmit={handleCreateColumn}
					columns={mockdata.data}
				/>
			)}
			{modalOpen && (
				<CreateModal
					modalSize='lg'
					title='새로운 대시보드'
					subTitle='대시보드이름'
					onDashBoardSubmit={handleCreateDashBoard}
					onCancel={handleModalState}
					columns={mockdata.data}
				/>
			)} */}
		</>
	);
}
