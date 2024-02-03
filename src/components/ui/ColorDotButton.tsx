import Image from 'next/image';

export default function ColorDotButtons({
	bgColor,
	height,
	width,
}: {
	bgColor: string;
	height: string;
	width: string;
}): React.JSX.Element {
	const imageSize = {
		left: `${width === 'w-8' ? 6 : 2.5}px`,
		top: `${height === 'h-8' ? 5 : 1.5}px`,
	};

	return (
		<div className='relative'>
			<button
				className={` rounded-full ${bgColor} ${height} ${width}`}
			></button>
			<div className='absolute ' style={imageSize}>
				<Image
					src='/icons/chip_check.svg'
					width={22}
					height={22}
					alt='check icon'
				/>
			</div>
		</div>
	);
}
