import React, { useEffect, useState } from 'react';

import { useGetCardDetail } from '@/src/hooks/Card/useGetCardList';
import { Card } from '@/src/types/card';

interface CardDetailsProps {
	cardId: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({ cardId }) => {
	const [cardData, setCardData] = useState<Card | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedCardData: Card = await useGetCardDetail(cardId);
				setCardData(fetchedCardData);
			} catch (error) {
				console.error('카드 정보를 가져오는 중 오류가 발생했습니다.', error);
			}
		};
		fetchData();
	}, [cardId]);

	if (!cardData) {
		return <div>Loading...</div>; // 데이터를 기다리는 동안 로딩 상태를 표시할 수 있습니다.
	}

	// 여기에서 cardData를 사용하여 컴포넌트를 렌더링할 수 있습니다.

	return (
		<div className='h-[763px] w-[730px] px-7 py-8'>
			<div>버튼 케밥 absolute</div>
			<div>close 버튼 </div>
			<span>제목 들어갈자리</span>
			<div>
				담당자 assignee 이름 프로필 이미지 마감일 duedate 자리 sm일때는 flex로
				변환 해야하므로 위치 설정{' '}
			</div>
			<div>태그 들어갈자리</div>

			<div>내용들어갈자리</div>
			<div>이미지 들어갈 자리</div>
			<span>댓글</span>
			<div>텍스트 에어리어 들어갈 자리 그안에 입력 버튼 </div>
			<div>댓글에 대한 정보 profileimage 이름 날짜 내용 수정 삭제 버튼</div>
		</div>
	);
};

export default CardDetails;
