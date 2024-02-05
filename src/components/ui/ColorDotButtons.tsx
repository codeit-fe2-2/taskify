import Image from 'next/image';
import { useState } from 'react';

interface ColorDotButtonsProps {
	onSelectedColor: (color: string) => void;
}

export default function ColorDotButtons({
	onSelectedColor,
}: ColorDotButtonsProps) {
	const [selectedButton, setSelectedButton] = useState<number | null>(null);

	const colors = ['#7AC555', '#E876EA', '#76A5EA', '#760DDE', '#FFA500'];

	const handleClick = (buttonIndex: number) => {
		const selectedColor = colors[buttonIndex];
		if (selectedButton === buttonIndex) {
			setSelectedButton(null);
			onSelectedColor('');
		} else {
			setSelectedButton(buttonIndex);
			onSelectedColor(selectedColor);
		}
	};

	return (
		<div className='relative flex gap-1'>
			{colors.map((color, index) => (
				<button
					key={index}
					className='relative rounded-full  sm:size-6 md:size-6 lg:size-8'
					style={{ backgroundColor: colors[index] }}
					onClick={() => handleClick(index)}
				>
					{selectedButton === index && (
						<div
							className='absolute size-[22px] lg:size-[26px]'
							style={{
								left: '50%',
								top: '50%',
								transform: 'translate(-50%, -50%)',
							}}
						>
							<Image
								src='/icons/chip_check.svg'
								layout='fill'
								objectFit='contain'
								alt='check icon'
							/>
						</div>
					)}
				</button>
			))}
		</div>
	);
}
