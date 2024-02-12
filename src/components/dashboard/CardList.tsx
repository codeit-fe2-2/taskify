import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { getCardList } from '@/src/apis/card/getCardList';
import IconButton from '@/src/components/ui/Button/IconButton';
import CountNumberChip from '@/src/components/ui/Chips/CountNumberChip';
import { useModal } from '@/src/contexts/ModalProvider';
import { Card as CardType } from '@/src/types/card';
import { Column } from '@/src/types/dashboard';

import TodoModal from '../ui/Modal/TodoModal';
import Card from './Card';
interface CardListProps {
	column: Column;
	handleModifyColumn: (id: number) => void;
	handleToastMessage: () => void;
}

interface CardData {
	cards: CardType[];
	totalCount: number;
	cursorId: number | null;
}

export default function CardList({
	column,
	handleModifyColumn,
	handleToastMessage,
}: CardListProps) {
	const router = useRouter();
	const { boardid } = router.query;
	const [data, setData] = useState<CardData>({
		cards: [],
		totalCount: 0,
		cursorId: null,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasNext, setHasNext] = useState<boolean>(false);
	const observerRef = useRef<HTMLDivElement>(null);

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
				cards: [...prevData.cards, ...result.cards],
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

	const loadMoreCards = async () => {
		if (data.cursorId !== null) {
			await fetchData();
		}
	};

	const handleCreateCard = () => {
		openModal(
			<TodoModal
				onClose={() => closeModal(modalId)}
				onCreated={handleToastMessage}
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
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [data.cursorId, hasNext, isLoading]);

	return (
		<div className='max-h-[100%] overflow-y-auto'>
			<style>
				{`
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
						<div className='flex items-center gap-2'>
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
						<IconButton
							rounded='md'
							iconSize={22}
							src='/icons/plus.svg'
							alt='plusImage'
							className='w-full py-2'
							onClick={handleCreateCard}
							onClick={handleCreateCard}
						/>
						{data.cards.map((cardData, index) => (
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							<button
								type='button'
								key={index}
								onClick={() => handleCardDetailsModalOpen(cardData)}
							>
								<Card cardData={cardData} />
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
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}
