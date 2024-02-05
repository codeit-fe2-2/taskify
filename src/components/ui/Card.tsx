import clsx from 'clsx';
import Image from 'next/image';

import ColorTagChip from './Chips/ColorTagChip';
interface DynamicCardProps {
	title: string;
	tagText: string;
	hasImage: boolean;
}

const Card = ({
	title,
	tagText,

	hasImage,
}: DynamicCardProps) => {
	// 동적으로 크기 및 스타일 계산
	const cardStyle = {
		height: hasImage ? '297px' : '125px',
		width: '314px',
		margin: '5px',
		borderRadius: '6px',
		border: '1px solid #ccc',
		padding: '10px',
	};

	const imageStyle = {
		marginLeft: hasImage ? '2px' : '20px',
		marginTop: hasImage ? '5px' : '10px',
	};

	const marginLeft = hasImage ? '20' : '40';
	const marginTop = hasImage ? '12' : '20';
	return (
		<div className='m-5' style={cardStyle}>
			{hasImage && (
				<div style={imageStyle}>
					<Image
						src='/images/card_image1.png'
						width={274}
						height={160}
						alt='example photo'
						className='m-[10px]'
					/>
				</div>
			)}

			<div
				className={clsx(
					`ml-${marginLeft} mt-${marginTop} flex h-[51px] w-[161px] flex-col gap-[10px]`,
				)}
			>
				<div className='text-[16px] text-black2'>{title}</div>
				<ColorTagChip fontSize='text-xs'>{tagText}</ColorTagChip>
			</div>

			<div
				className={`ml-[${marginLeft}px]  mt-[${marginTop} flex h-[24px] w-[247px] items-center justify-between gap-[6px]`}
			>
				<div>
					<div className='flex gap-[6px]'>
						<Image
							src='/icons/calendar.svg'
							width={18}
							height={18}
							alt='calendar icon'
						/>
						<div className='text-gray5'>마감일</div>
					</div>
				</div>
				<div>배지</div>
			</div>
		</div>
	);
};

export default Card;
