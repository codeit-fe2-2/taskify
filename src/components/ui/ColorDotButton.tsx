import Image from 'next/image';
import { useState } from 'react';

interface ColorDotButtonProps {
	handleSelectorColor: (color: string) => void;
}
export default function ColorDotButtons({
	handleSelectorColor,
}: ColorDotButtonProps) {
	const [selectedButton, setSelectedButton] = useState<number | null>(0);
	const colors = ['#7AC555', '#E876EA', '#76A5EA', '#760DDE', '#FFA500'];
	const handleClick = (buttonIndex: number) => {
		if (selectedButton === buttonIndex) {
			setSelectedButton(null);
			handleSelectorColor('');
		} else {
			setSelectedButton(buttonIndex);

			handleSelectorColor(colors[buttonIndex]);
		}
	};

	return (
		<div className='relative mt-7 flex gap-1'>
			{colors.map((color, index) => (
				<button
					key={index}
					className={`flex size-8 items-center justify-center  rounded-full sm:size-6`}
					onClick={() => handleClick(index)}
					style={{ backgroundColor: colors[index] }}
				>
					{selectedButton === index && (
						<Image
							src='/icons/chip_check.svg'
							width={22}
							height={22}
							alt='check icon'
						/>
					)}
				</button>
			))}
		</div>
	);
}
