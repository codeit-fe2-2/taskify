import Image from 'next/image';

import { Card } from '@/src/types/card';
import formatDateTime from '@/src/util/formatDateTime';

import ColorTagChip from '../ui/Chips/ColorTagChip';
import DefaultProfileImage from '../ui/DefaultProfileImage';

interface CardDataProps {
	cardData: Card;
}

export default function Card({ cardData }: CardDataProps) {
	const { title, imageUrl = '', tags, dueDate, assignee } = cardData;
	return (
		<div className='flex w-full flex-col gap-4 '>
			<div className='flex flex-col justify-between gap-[12px] rounded-[6px] border-[1px] border-solid border-gray3 bg-white p-5 sm:p-3 md:flex-row'>
				{imageUrl && (
					<Image
						src={imageUrl}
						width={274}
						height={160}
						className='rounded-md sm:h-[151px] sm:w-[260px] md:h-[53px] md:w-[90px]'
						alt='사진 예시'
					/>
				)}
				<div
					className={`flex flex-col gap-[6px] ${imageUrl ? 'md:w-[400px]' : 'sm:w-[257px] md:w-[501px] lg:w-[271px]'}  md:items-start md:justify-center`}
				>
					<div className='h-[21px] text-left text-base font-medium leading-5 text-black2 sm:text-[14px]'>
						{title}
					</div>
					<div className='md:flex md:w-full'>
						<div className='flex gap-2 md:flex-row md:gap-[10px]'>
							{tags.map((tag, index) => (
								<div key={index} className={`${index >= 2 && 'hidden'}`}>
									<ColorTagChip>{tag}</ColorTagChip>
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
									{formatDateTime(dueDate)}
								</div>
							</div>
							{assignee.profileImageUrl ? (
								<div className='relative size-6'>
									<Image
										src={assignee.profileImageUrl}
										fill={true}
										className='rounded-full'
										alt={assignee.nickname}
									/>
								</div>
							) : (
								<DefaultProfileImage
									classNames='size-6 rounded-full bg-green text-[12px]'
									nickname={assignee.nickname}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
