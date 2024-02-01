import React from 'react';

import DashBoardButton from '@/src/components/ui/Button/DashBoardButton';
import IconButton from '@/src/components/ui/Button/IconButton';
import TextButton from '@/src/components/ui/Button/TextButton';

export default function Page() {
	const handleLoginClick = () => {
		console.log('테슷흐입니다.');
	};
	const dashboards = [
		{
			id: 0,
			title: '비브리지',
			color: 'orange',
			createdAt: '2024-01-30T09:20:29.789Z',
			updatedAt: '2024-01-30T09:20:29.789Z',
			createdByMe: true,
			userId: 0,
		},
	];

	return (
		<>
			<div className='font-bold text-orange'>테스트 페이지!</div>
			<br />
			<TextButton
				buttonSize='xl'
				color='primary'
				textSize='large'
				disabled={false}
			>
				로그인
			</TextButton>
			<TextButton
				buttonSize='sm'
				color='primary'
				textSize='medium'
				onClick={handleLoginClick}
			>
				수락
			</TextButton>
			<TextButton
				buttonSize='sm'
				color='secondary'
				textSize='medium'
				onClick={handleLoginClick}
			>
				거절
			</TextButton>
			<TextButton
				buttonSize='xxs'
				color='secondary'
				textSize='small'
				onClick={handleLoginClick}
			>
				삭제
			</TextButton>
			<TextButton
				buttonSize='lg'
				color='third'
				textSize='large'
				onClick={handleLoginClick}
			>
				대시보드 삭제하기
			</TextButton>
			<TextButton
				buttonSize='xs'
				color='secondary'
				textSize='large'
				onClick={handleLoginClick}
			>
				입력
			</TextButton>
			<TextButton
				buttonSize='md'
				color='secondary'
				textSize='medium'
				onClick={handleLoginClick}
			>
				취소
			</TextButton>
			<TextButton
				buttonSize='md'
				color='primary'
				textSize='medium'
				onClick={handleLoginClick}
			>
				확인
			</TextButton>
			<IconButton
				src='/icons/plus.svg'
				alt='plus'
				iconSize={22}
				buttonSize='sm'
			/>
			<IconButton
				src='/icons/plus.svg'
				alt='plus'
				iconSize={22}
				buttonSize='lg'
			>
				새로운 컬럼 추가하기
			</IconButton>
			<IconButton
				src='/icons/plus.svg'
				alt='plus'
				iconSize={22}
				buttonSize='md'
			>
				새로운 대시보드
			</IconButton>
			<IconButton
				src='/icons/arrowBefore.svg'
				alt='plus'
				iconSize={16}
				buttonSize='xs'
				rounded='left'
			/>
			<IconButton
				src='/icons/arrowNext.svg'
				alt='plus'
				iconSize={16}
				buttonSize='xs'
				rounded='right'
				disabled={true}
			/>

			<DashBoardButton
				id={dashboards[0].id}
				title={dashboards[0].title}
				color={dashboards[0].color}
				createdByMe={dashboards[0].createdByMe}
			/>
		</>
	);
}
