import React, { useState } from 'react';

import AlertModal from '@/src/components/ui/Modal/AlertModal';

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
			{modalOpen && (
				<AlertModal
					message='컬럼의 모든 카드가 삭제됩니다.'
					content='확인'
					secondButton={true}
					secondContent='취소'
					// onClick={handleModalClose}
					onClose={handleModalClose}
					secondOnClick={handleModalClose}
				/>
			)}
		</>
	);
}
