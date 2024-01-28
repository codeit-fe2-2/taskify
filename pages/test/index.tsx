import React from 'react';

import IconButton from '@/src/components/ui/Button/IconButton';

export default function Page() {
	const handleLoginClick = () => {
		console.log('테슷흐입니다.');
	};
	return (
		<>
			<div className='font-bold text-orange'>테스트 페이지!</div>

			<br />
			<IconButton
				onClick={handleLoginClick}
				buttonSize='sm'
				iconSize={16}
				src='/icons/arrowNext.svg'
				rounded='right'
				disabled={true}
			/>
			<IconButton
				onClick={handleLoginClick}
				buttonSize='sm'
				iconSize={16}
				src='/icons/arrowNext.svg'
				rounded='left'
				disabled={false}
			/>
			<IconButton
				src='/icons/plus.svg'
				buttonSize='lg'
				alt='plus'
				iconSize={22}
			>
				새로운 대시보드
			</IconButton>
			<IconButton
				src='/icons/plus.svg'
				buttonSize='lg'
				alt='plus'
				iconSize={22}
			>
				새로운 컬럼추가하기
			</IconButton>
			<IconButton
				src='/icons/plus.svg'
				buttonSize='md'
				alt='plus'
				iconSize={22}
			/>
		</>
	);
}
