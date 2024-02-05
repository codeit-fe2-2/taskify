import Image from 'next/image';

// import { ReactNode } from 'react';
import ColorTagChip from './Chips/ColorTagChip';

export default function Card() {
	return (
		<div>
			<div className=' m-5 flex h-[125px] w-[314px] flex-col items-start justify-center gap-2 rounded-[6px] border-[1px] border-solid border-gray3 pl-[10px]'>
				<div className=' flex h-[21px] w-[161px] text-[16px] text-black2'>
					새로운 일정관리
				</div>
				<div className='flex gap-2'>
					<ColorTagChip>할일</ColorTagChip>
					<ColorTagChip>프로젝트</ColorTagChip>
					<ColorTagChip>프론트엔드</ColorTagChip>
				</div>

				<div className=' flex h-[24px] w-[247px] items-center justify-between gap-[6px]'>
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

			{/* with image */}
			<div className='m-5 h-[297px] w-[314px] rounded-[6px] border-[1px] border-solid border-gray3'>
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
					<ColorTagChip>할일</ColorTagChip>
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
