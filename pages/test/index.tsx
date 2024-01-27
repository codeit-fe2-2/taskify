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
				disabled={true}
			>
				로그인
			</GeneralButton2>

			<GeneralButton2
				buttonSize='icon'
				src='icons/arrowNext.svg'
				onClick={handleLoginClick}
				className='rounded-r-md border-[1px] border-gray4'
				iconSize='w-[16px] h-[16px] '
				disabled={true}
			></GeneralButton2>
		</>
	);
}
