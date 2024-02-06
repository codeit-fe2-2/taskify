import Image from 'next/image';

import ColorTagChip from '../Chips/ColorTagChip';

export default function Card() {
	return (
		<div className='flex flex-col gap-[12px] rounded-[6px] border-[1px] border-solid border-gray3 p-5 md:flex-row'>
			<Image
				src='/images/card_image1.png'
				width='274'
				height='160'
				alt='사진 예시'
				className='w-full sm:w-[260] md:w-[100px] lg:w-[274]'
			/>
			<div className='flex w-full flex-col gap-[6px] md:w-[504px] md:items-start md:justify-center'>
				<div className='h-[21px] text-[16px] text-black2 sm:text-[14px]'>
					title: strigdddd
				</div>
				<div className='md:flex md:w-full'>
					<div className='flex gap-2 md:flex-row md:gap-[10px]'>
						<ColorTagChip>상</ColorTagChip>
						<ColorTagChip>프로젝트</ColorTagChip>

						{/* tags:['string'] */}
					</div>

					<div className='flex w-auto items-center justify-between md:grow '>
						<div className='flex items-center justify-center gap-[6px]'>
							{/* assignee */}
							<Image
								src='/icons/calendar.svg'
								width={18}
								height={18}
								alt='캘린더 아이콘'
								className='sm:size-[14px] lg:size-[18px]'
							/>
							<div className='text-[12px] text-gray5 sm:text-[10px]'>
								2022.12.31
							</div>
							{/* dueDate:"string" */}
						</div>

						<div className='size-6 rounded-full bg-green px-[8px] text-[12px] '>
							p
						</div>
						{/* "profileImageUrl": "string" */}

						{/* assignee:{ "profileImageUrl": "string",
        "nickname": "string",
        "id": 0} */}
					</div>
				</div>
			</div>
		</div>
	);
}
