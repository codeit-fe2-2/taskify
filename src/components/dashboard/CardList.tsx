import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { getCardList } from '@/src/apis/card/getCardList';
import { useModal } from '@/src/contexts/ModalProvider';
import { useGetCardList } from '@/src/hooks/Card/useGetCardList'; // 카드 목록 가져오는 훅 추가
import { Column } from '@/src/types/dashboard';

import IconButton from '../ui/Button/IconButton';
import CountNumberChip from '../ui/Chips/CountNumberChip';
import TodoModal from '../ui/Modal/TodoModal';
import Card from './Card';

interface CardListProps {
	column: Column;
	handleModifyColumn: (id: number) => void;
}

interface CardData {
	cards: any[];
	totalCount: number;
	cursorId: number | null;
}

export default function CardList({
	column,
	handleModifyColumn,
}: CardListProps) {
	const router = useRouter();
	const { boardid } = router.query;
	const [data, setData] = useState<CardData>({
		cards: [],
		totalCount: 0,
		cursorId: null,
	});
	console.log(data);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasNext, setHasNext] = useState<boolean>(false);
	const observerRef = useRef<HTMLDivElement>(null);
	// const [page, setPage] = useState<number>(1);

	const { openModal, closeModal } = useModal();
	const modalId = crypto.randomUUID();

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const result = await getCardList(
				2,
				column.id,
				data.cursorId ?? undefined,
			);
			setData((prevData) => ({
				...prevData,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				cards: [...result.cards],
				cursorId: result.cursorId,
				totalCount: result.totalCount,
			}));
			setHasNext(result.cursorId !== null);
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleCardDetailsModalOpen = (cardData) => {
		console.log(cardData);
	};

	const loadMoreCards = async () => {
		if (data.cursorId !== null) {
			await fetchData();
		}
	};

	const handleCreateCard = () => {
		openModal(
			<TodoModal
				onClose={() => closeModal(modalId)}
				onCreated={() => void fetchData()}
				mode='생성'
				postData={{
					assigneeUserId: 0,
					dashboardId: Number(boardid as string),
					columnId: column.id,
					title: '',
					description: '',
					dueDate: '',
					tags: [],
					imageUrl: '',
				}}
			/>,
			modalId,
		);
	};

	useEffect(() => {
		void fetchData();
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasNext && !isLoading) {
					void loadMoreCards();
				}
			},
			{ threshold: 1 },
		);

		if (observerRef.current) {
			observer.observe(observerRef.current);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasNext && !isLoading) {
					void loadMoreCards();
				}
			},
			{ threshold: 1 },
		);

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [data.cursorId, hasNext, isLoading]);

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [data.cursorId, hasNext, isLoading]);

	return (
		<div className='max-h-[100%] overflow-y-auto'>
		<div className='max-h-[100%] overflow-y-auto'>
			<style>
				{`
              /* Webkit */ 
              ::-webkit-scrollbar {
                  width: 0px;  /* 세로 스크롤의 너비 */
                  height: 0px; /* 가로 스크롤의 높이 */
              }
              `}
              /* Webkit */ 
              ::-webkit-scrollbar {
                  width: 0px;  /* 세로 스크롤의 너비 */
                  height: 0px; /* 가로 스크롤의 높이 */
              }
              `}
			</style>

			{data && (
				<>
					<div className='mb-4 flex items-center justify-between'>
					<div className='mb-4 flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<div className={`size-4 rounded-full bg-purple`}></div>
							<div className='text-lg font-bold leading-5'>{column?.title}</div>
							<CountNumberChip count={data.totalCount} />
							<div className={`size-4 rounded-full bg-purple`}></div>
							<div className='text-lg font-bold leading-5'>{column?.title}</div>
							<CountNumberChip count={data.totalCount} />
						</div>
						<IconButton
							src='/icons/settings.svg'
							alt='settingImage'
							iconSize={24}
							className='border-none'
							onClick={() => handleModifyColumn(column.id)}
						/>
					</div>
					<div className='space-y-4'>
					<div className='space-y-4'>
						<IconButton
							rounded='md'
							iconSize={22}
							src='/icons/plus.svg'
							alt='plusImage'
							className='w-full py-2'
							onClick={handleCreateCard}
						/>
						{data.cards.map((cardData, index) => (
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							<button
								type='button'
								onClick={() => handleCardDetailsModalOpen(cardData)}
							>
								<CardComponent key={index} cardData={cardData} />
							</button>
						))}
						<div ref={observerRef} />
						{isLoading && (
							<div className=' flex justify-center pb-3'>
								<Image
									width={25}
									height={25}
									alt='loading'
									src='/icons/loading.png'
									className='animate-spin'
								/>
						<div ref={observerRef} />
						{isLoading && (
							<div className=' flex justify-center pb-3'>
								<Image
									width={25}
									height={25}
									alt='loading'
									src='/icons/loading.png'
									className='animate-spin'
								/>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}
