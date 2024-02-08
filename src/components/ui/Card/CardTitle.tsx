import Image from 'next/image';

import CountNumberChip from '../Chips/CountNumberChip';

export default function CardTitle() {
	return (
		<div className='flex justify-between'>
			<div className='flex items-center gap-3'>
				<Image
					src='/icons/chip_ellipse_sm_purple.svg'
					alt='보라색 점 아이콘'
					width={2}
					height={2}
					className='sm:size-[6px] md:size-[6px] lg:size-[8px]'
				/>
				<div className='text-[18px] sm:text-[16px]'>On Progress</div>
				<CountNumberChip count={3} />
			</div>
			<Image
				src='/icons/setting.svg'
				alt='설정 아이콘'
				width={22}
				height={22}
				className='size-[22px] lg:size-[24px]'
			/>
		</div>
	);
}
