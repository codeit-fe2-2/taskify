import Image from 'next/image';

import ColorTagChip from '../Chips/ColorTagChip';

interface CardDataProps {
	title: string;
	ImageUrl: string;
	profileImageUrl: string;
	tags: string[];
	dueDate: string;
}

export default function Card({
	title,
	ImageUrl,
	profileImageUrl,
	tags,
	dueDate,
}: CardDataProps) {
	return (
		<div className='flex flex-col gap-[12px] rounded-[6px] border-[1px] border-solid border-gray3 p-5 md:flex-row'>
			{ImageUrl ? (
				<Image
					src={ImageUrl}
					width='274'
					height='160'
					alt='사진 예시'
					className='w-full sm:w-[260] md:w-[100px] lg:w-[274]'
				/>
			) : null}
			<div className='flex w-full flex-col gap-[6px] md:w-[504px] md:items-start md:justify-center'>
				<div className='h-[21px] text-[16px] text-black2 sm:text-[14px]'>
					{title}
				</div>
				<div className='md:flex md:w-full'>
					<div className='flex gap-2 md:flex-row md:gap-[10px]'>
						{tags.map((tag, index) => (
							<ColorTagChip key={index}>{tag}</ColorTagChip>
						))}
					</div>

					<div className='flex w-auto items-center justify-between md:grow '>
						<div className='flex items-center justify-center gap-[6px]'>
							<Image
								src='/icons/calendar.svg'
								width={18}
								height={18}
								alt='캘린더 아이콘'
								className='sm:size-[14px] lg:size-[18px]'
							/>
							<div className='text-[12px] text-gray5 sm:text-[10px]'>
								{dueDate}
							</div>
						</div>

						<div className='size-6 rounded-full bg-green px-[8px] text-[12px] '>
							{profileImageUrl}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
