import Image from 'next/image';

import ColorTagChip from './Chips/ColorTagChip';

export default function Card() {
	return (
		<div>
			<div className='m-5 h-[125px] w-[314px] rounded-[6px] border-[1px] border-solid border-gray3 '>
				<div className='m-[10px] ml-[20px] flex h-[51px] w-[161px] flex-col gap-[10px]'>
					<div className='text-[16px] text-black2'>새로운 일정관리</div>
					<ColorTagChip
						textColor='text-sortTextGreen'
						bgColor='bg-sortTextBgGreen'
						fontSize='text-xs'
					>
						할일
					</ColorTagChip>
				</div>

				<div className='ml-[20px] mt-5 flex h-[24px] w-[247px] items-center justify-between gap-[6px]'>
					<div>
						<div className='flex gap-[6px]'>
							<Image
								src='/icons/calendar.svg'
								width={18}
								height={18}
								alt='calender icon'
							/>
							<div className='text-gray5'>마감일</div>
						</div>
					</div>
					<div>배지</div>
				</div>
			</div>

			{/* without image */}
			<div className='m-5  h-[297px] w-[314px] rounded-[6px] border-[1px] border-solid border-gray3'>
				<div className='ml-2 mt-5'>
					<Image
						src='/images/card_image1.png'
						width='274'
						height='160'
						alt='example photo'
						className='m-[10px]'
					/>
				</div>

				<div className='ml-[20px] mt-[12px] flex h-[51px] w-[161px] flex-col gap-[10px]'>
					<div className='text-[16px] text-black2'>새로운 일정관리</div>
					<ColorTagChip
						textColor='text-sortTextGreen'
						bgColor='bg-sortTextBgGreen'
						fontSize='text-xs'
					>
						할일
					</ColorTagChip>
				</div>

				<div className='ml-[20px] mt-5 flex h-[24px] w-[247px] items-center justify-between gap-[6px]'>
					<div>
						<div className='flex gap-[6px]'>
							<Image
								src='/icons/calendar.svg'
								width={18}
								height={18}
								alt='calender icon'
							/>
							<div className='text-gray5'>마감일</div>
						</div>
					</div>
					<div>배지</div>
				</div>
			</div>
		</div>
	);
}
