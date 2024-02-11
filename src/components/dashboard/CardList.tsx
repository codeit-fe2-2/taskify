import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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

const CardList = ({ column, handleModifyColumn }: CardListProps) => {
	const [data, setData] = useState<CardData>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);

	const { openModal, closeModal } = useModal();
	const modalId = crypto.randomUUID();

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const result = await useGetCardList(2, column.id, page);

			if (result.cards.length >= 0) {
				setData((prevData) => ({
					...result,
					cards: [...(prevData?.cards || []), ...result.cards],
				}));
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleCreateCard = () => {
		openModal(
			<TodoModal
				onClose={() => closeModal(modalId)}
				handleSubmit={() => {}}
				mode='생성'
				postData={{
					assigneeUserId: 765,
					dashboardId: 3226,
					columnId: 10771,
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
	}, [column.id, page]);

	const loadMoreCards = () => {
		if (data && data.cards.length === data.totalCount) {
			return;
		}
		setPage(page + 1);
	};

	return (
		<div className='max-h-[100%] overflow-y-auto '>
			<style>
				{`
                /* Webkit */ 
                ::-webkit-scrollbar {
                    width: 0px;  /* 세로 스크롤의 너비 */
                    height: 0px; /* 가로 스크롤의 높이 */
                }
                `}
			</style>

			{isLoading && <div>Loading...</div>}
			{data && (
				<>
					<div className='flex justify-between'>
						<div className='flex items-center gap-2'>
							<div className={` size-2 rounded-full bg-purple`}></div>
							<div className='mr-1 text-lg font-bold leading-5'>
								{column?.title}
							</div>
							<CountNumberChip count={data?.totalCount} />
						</div>
						<IconButton
							src='/icons/settings.svg'
							alt='settingImage'
							iconSize={24}
							className='border-none'
							onClick={() => handleModifyColumn(column.id)}
						/>
					</div>
					<div>
						{/* 카드추가 버튼 */}
						<IconButton
							rounded='md'
							iconSize={22}
							src='/icons/plus.svg'
							alt='plusImage'
							className=' mt-[24px] w-[313px] py-[9px]  sm:w-[284px] sm:py-[6px] md:w-[544px]'
							onClick={handleCreateCard}
						/>
						{data?.cards.map((card, index) => (
							<div key={index} className={`mt-4`}>
								<Card cardData={card}></Card>
							</div>
						))}
						{data?.cards.length < data?.totalCount && (
							<div className='flex justify-center'>
								{isLoading ? (
									<Image
										width={25}
										height={25}
										alt='loading'
										src='/icons/loading.png'
										className='mt-4 animate-spin'
									/>
								) : (
									<button
										onClick={loadMoreCards}
										className='mt-4 rounded bg-blue px-4 py-2 font-bold text-white hover:bg-green'
									>
										더 가져오기
									</button>
								)}
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default CardList;
