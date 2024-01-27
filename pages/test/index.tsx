import React from 'react';

import GeneralButton2 from '@/src/components/ui/GeneralButton';

export default function Page() {
	const handleLoginClick = () => {
		console.log('테슷흐입니다.');
	};
	return (
		<>
			<div className='font-bold text-orange'>테스트 페이지!</div>

			<br />
			<GeneralButton2
				buttonSize='xl'
				textSize='large'
				onClick={handleLoginClick}
				color='primary'
				disabled={false}
			>
				로그인
			</GeneralButton2>
		</>
	);
}
