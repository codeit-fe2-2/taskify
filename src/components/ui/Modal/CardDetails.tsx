import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { useGetCommentList } from '@/src/apis/card/useGetCommentList';
import { useGetCardDetail } from '@/src/hooks/Card/useGetCardDetail';
import { useGetColumnList } from '@/src/hooks/dashboard/useGetColumnList';
import { Card } from '@/src/types/card';
import formatDateTime from '@/src/util/formatDateTime';

import ColorTagChip from '../Chips/ColorTagChip';
import DotNameTagChip from '../Chips/DotNameTagChip';
import DefaultProfileImage from '../DefaultProfileImage';
import ModalTextarea from '../ModalInput/ModalTextarea';

interface CardDetailsProps {
	cardId: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({ cardId }) => {
	const [cardData, setCardData] = useState<Card | null>(null);
	const [comment, setComment] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	// const { commentListInfo, execute: executeGetComment } = useGetCommentList(
	// 	99,
	// 	cardId,
	// );
	const { commentListInfo } = useGetCommentList(99, cardId);
	const { data } = useGetColumnList();
	const currentColumnTitle = data?.find(
		(item) => item.id === cardData?.columnId,
	)?.title;
	// const { execute: executePostComment } = usePostComment();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedCardData: Card = await useGetCardDetail(cardId);
				setCardData(fetchedCardData);
			} catch (error) {
				console.error('카드 정보를 가져오는 중 오류가 발생했습니다.', error);
			}
		};
		void fetchData();
	}, [cardId]);

	if (!cardData) {
		return <div>Loading...</div>; // 데이터를 기다리는 동안 로딩 상태를 표시할 수 있습니다.
	}

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleClose = () => {};

	const handlePostComment = () => {
		if (comment) {
			// executePostComment(comment, cardId, cardData?.columnId);
			// console.log('!', comment, cardId, cardData?.columnId);
		}
	};

	return (
		<div className='relative flex max-w-[730px] shrink-0 flex-col gap-6 rounded-lg bg-white px-7 py-8 text-black4 sm:w-[327px] sm:gap-4 sm:px-5 sm:py-3 md:w-[680px]'>
			<div className='flex flex-row sm:flex-col-reverse'>
				<h1 className='grow justify-start text-2xl font-bold sm:text-xl'>
					{cardData.title}
				</h1>
				<div className='relative flex flex-row items-center justify-end gap-4'>
					<button className='relative size-7 sm:size-5' onClick={handleMenu}>
						<Image src='/icons/more_vert.svg' fill={true} alt='menu' />
					</button>
					<button className='relative size-8 sm:size-6'>
						<Image
							src='/icons/close.svg'
							fill={true}
							alt='menu'
							onClick={handleClose}
						/>
					</button>
					{isMenuOpen && (
						<div className='absolute right-10 top-8 z-10 flex h-[82px] w-[93px] flex-col gap-1.5 rounded-md border border-gray3 bg-white p-1.5 text-center text-sm font-normal leading-6 shadow-[0_4px_20px_0_rgba(0_0_0_0.08)] sm:right-10 sm:top-6 sm:text-xs sm:leading-normal'>
							<button className='h-8 w-full shrink-0 rounded hover:bg-violet1 hover:text-violet2 sm:h-[30px]'>
								수정하기
							</button>
							<button className='h-8 w-full shrink-0 rounded hover:bg-violet1 hover:text-violet2 sm:h-[30px]'>
								삭제하기
							</button>
						</div>
					)}
				</div>
			</div>
			<div className='flex flex-row gap-6 sm:flex-col-reverse'>
				<div className='relative flex w-[450px] flex-col gap-6 sm:max-w-[287px] md:w-[420px]'>
					<div className='relative flex flex-col gap-4'>
						<div className='flex flex-row items-center gap-5'>
							<DotNameTagChip>{currentColumnTitle}</DotNameTagChip>
							<hr className='h-5 border-l border-gray3' />
							<div className='flex flex-row gap-1.5'>
								{cardData.tags.map((tag, index) => (
									<ColorTagChip key={index}>{tag}</ColorTagChip>
								))}
							</div>
						</div>
						<div className='text-sm font-normal text-[#000] sm:text-xs'>
							{cardData.description}
						</div>
						<div className='relative h-[260px] w-full rounded-md sm:h-[168px] sm:max-w-[287px]'>
							<Image
								src={cardData.imageUrl}
								fill={true}
								alt={cardData.title}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
					{commentListInfo && (
						<div className='flex flex-col gap-5'>
							<ModalTextarea
								label='댓글'
								isButton
								onTextChange={setComment}
								onButtonClick={handlePostComment}
							/>
							{commentListInfo?.comments.map((comment, index) => (
								<div key={index} className='flex flex-row gap-2.5'>
									<div className='relative size-[34px] rounded-full sm:size-[26px]'>
										{comment.author.profileImageUrl ? (
											<Image
												src={comment.author.profileImageUrl}
												fill
												alt={comment.author.nickname}
												className='rounded-full'
											/>
										) : (
											<DefaultProfileImage
												nickname={comment.author.nickname}
												classNames='text-sm sm:text-xs'
											/>
										)}
									</div>
									<div className='flex flex-col'>
										<p className='text-sm font-semibold sm:text-xs'>
											{comment.author.nickname}
											<span className='ml-2 text-xs font-normal text-gray4 sm:text-[10px]'>
												{formatDateTime(comment.createdAt)}
											</span>
										</p>
										<p className='text-sm font-normal sm:text-xs'>
											{comment.content}
										</p>
										<div className='flex flex-row gap-3 text-xs text-gray4 underline decoration-gray4 decoration-solid sm:text-xs'>
											<button>수정</button>
											<button>삭제</button>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
				<div className='flex h-[155px] w-[200px] flex-col gap-5 rounded-lg border border-gray3 p-4 py-3 sm:h-16 sm:w-full sm:flex-row sm:px-4 md:w-[180px]'>
					<div className='flex w-[200px] flex-col gap-1.5 sm:h-16 sm:w-1/2'>
						<p className='text-xs font-semibold text-[#000] sm:text-[10px]'>
							담당자
						</p>
						<div className='flex flex-row items-center gap-2'>
							<div className='relative size-[34px] rounded-full sm:size-2.5'>
								{cardData.assignee.profileImageUrl ? (
									<Image
										src={cardData.assignee.profileImageUrl}
										fill={true}
										alt={cardData.assignee.nickname}
										style={{
											objectFit: 'cover',
											objectPosition: '50% 50%',
										}}
										className='rounded-full'
									/>
								) : (
									<DefaultProfileImage
										nickname={cardData.assignee.nickname}
										classNames='text-sm sm:text-xs'
									/>
								)}
							</div>
							<p className='text-sm font-normal sm:text-xs'>
								{cardData.assignee.nickname}
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-1.5 sm:w-1/2'>
						<p className='text-xs font-semibold text-[#000] sm:text-[10px]'>
							마감일
						</p>
						<p className='text-sm font-normal sm:text-xs'>
							{formatDateTime(cardData.dueDate)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDetails;
