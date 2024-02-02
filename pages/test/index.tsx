import React, { useState } from 'react';

import CreateModal from '@/src/components/ui/Modal/CreateModal';

import mockdata from '../../dashboardmock.json';
export default function Page() {
	const [modalOpen, setModalOpen] = useState(false);

	const handleModalOpen = () => {
		setModalOpen(!modalOpen);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};
	return (
		<>
			<div className='font-bold text-orange'>테스트 페이지!</div>
			<button onClick={handleModalOpen}>모달오픈</button>

			{/* {modalOpen && (
				<AlertModal
					message='비밀번호가 일치하지 않습니다.'
					content='확인'
					onClick={handleModalClose}
					onClose={handleModalClose}
				/>
			)} */}
			{/* {modalOpen && (
				<CreateModal
					modalSize='sm'
					title='새 컬럼 생성'
					subTitle='이름'
					// onClick={handleModalClose}
					onClose={handleModalClose}
					secondOnClick={handleModalClose}
					columns={mockdata.data}
				/>
			)} */}
			{modalOpen && (
				<CreateModal
					modalSize='lg'
					title='새로운 대시보드'
					subTitle='대시보드이름'
					// onClick={handleModalClose}
					onClose={handleModalClose}
					secondOnClick={handleModalClose}
					columns={mockdata.data}
				/>
			)}
		</>
	);
}
