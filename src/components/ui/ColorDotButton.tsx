import Image from 'next/image';
import { useState } from 'react';
export default function ColorDotButtons({
	bgColor,
	height,
	width,
}: {
	bgColor: 'bg-green' | 'bg-green' |
	height: string;
	width: string;
}): React.JSX.Element {
	const [isClicked, setIsClicked] = useState(false);

	const imageSize = {
		left: `${width === 'w-8' ? 6 : 2.5}px`,
		top: `${height === 'h-8' ? 5 : 1.5}px`,
	};

	const handleClick = () => {
		setIsClicked(true);
	};

	return (
		<div className='relative'>
			<button
				className={` rounded-full ${bgColor} ${height} ${width}`}
				onClick={handleClick}
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
