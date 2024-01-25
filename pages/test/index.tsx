import React from 'react';

import GeneralButtonamend from '@/src/components/ui/GeneralButton';

export default function Page() {
	const handleLoginClick = () => {
		console.log('테슷흐입니다.');
	};
	return (
		<>
			<div className='font-bold text-orange'>테스트 페이지!</div>
			<GeneralButtonamend
				onClick={handleLoginClick}
				buttonText='로그인'
				buttonType='login'
			/>
			<br />
			<div className='flex justify-center gap-[10px]'>
				<GeneralButtonamend
					onClick={handleLoginClick}
					buttonText='수락'
					buttonType='accept'
				/>
				<br />
				<GeneralButtonamend
					onClick={handleLoginClick}
					buttonText='거절'
					buttonType='reject'
				/>
			</div>
			<br />
			<GeneralButtonamend
				onClick={handleLoginClick}
				buttonText='삭제'
				buttonType='delete'
			/>
			<br />
			<div className='flex justify-center'>
				<GeneralButtonamend
					onClick={handleLoginClick}
					buttonText=''
					buttonType='prev'
				/>
				<GeneralButtonamend
					onClick={handleLoginClick}
					buttonText=''
					buttonType='next'
				/>
			</div>
			<br />
			<GeneralButtonamend
				onClick={handleLoginClick}
				buttonText='대시보드 삭제하기'
				buttonType='dashboardDelete'
			/>
		</>
	);
}
