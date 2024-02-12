import Image from 'next/image';

import { Card } from '@/src/types/card';

import ColorTagChip from '../ui/Chips/ColorTagChip';
import DefaultProfileImage from '../ui/DefaultProfileImage';

interface CardDataProps {
	cardData: Card;
}

export default function CardComponent({ cardData }: CardDataProps) {
	const { title, imageUrl = '', tags, dueDate, assignee } = cardData;

	return (
		<div className='flex w-full flex-col gap-4 '>
			<div className='flex flex-col justify-between gap-[12px] rounded-[6px] border-[1px] border-solid border-gray3 p-5 sm:p-3 md:flex-row'>
				{imageUrl && (
					<Image
						src={imageUrl}
						width={274}
						height={160}
						className='sm:h-[151px] sm:w-[260px] md:h-[53px] md:w-[90px]'
						alt='사진 예시'
					/>
				)}
				<div
					className={`flex flex-col gap-[6px] ${imageUrl ? 'md:w-[393px]' : 'md:w-full'}  md:items-start md:justify-center`}
				>
					<div className='h-[21px] text-base font-medium leading-5 text-black2 sm:text-[14px]'>
						{title}
					</div>
					<div className='md:flex md:w-full'>
						<div className='flex gap-2 md:flex-row md:gap-[10px]'>
							{tags.map((tag, index) => (
								<div key={index} className={`${index >= 2 && 'hidden'}`}>
									<ColorTagChip>{tags}</ColorTagChip>
									<ColorTagChip>{tags}</ColorTagChip>
								</div>
							))}
						</div>

						<div className='mt-[13px] flex w-auto items-center justify-between md:ml-4 md:mt-0 md:grow'>
							<div className='flex items-center justify-center gap-[6px]'>
								<Image
									src='/icons/calendar.svg'
									width={18}
									height={18}
									alt='캘린더 아이콘'
									className='sm:size-[14px] lg:size-[18px] '
								/>
								<div className='text-[12px] font-medium text-gray5 sm:text-[10px]'>
									{dueDate}
								</div>
							</div>

							<DefaultProfileImage
								classNames='size-6 rounded-full bg-green px-[8px] text-[12px]'
								nickname={assignee.nickname}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
