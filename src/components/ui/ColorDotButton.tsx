import Image from 'next/image';
import { useState } from 'react';

interface ColorDotButtonProps {
	handleSelectorColor: (color: string) => void;
}
export default function ColorDotButtons({
	handleSelectorColor,
}: ColorDotButtonProps) {
	const [selectedButton, setSelectedButton] = useState<number | null>(0);
	const colors = ['bg-green', 'bg-pink', 'bg-blue', 'bg-purple', 'bg-orange'];
	const handleClick = (buttonIndex: number) => {
		if (selectedButton === buttonIndex) {
			setSelectedButton(null);
			handleSelectorColor('');
		} else {
			setSelectedButton(buttonIndex);
			const buttonColor = colors[buttonIndex].slice(3);
			handleSelectorColor(buttonColor);

		}
	};

	return (
		<div className='relative mt-7 flex gap-1'>
			{colors.map((color, index) => (
				<button
					key={index}
					className={`flex items-center justify-center rounded-full ${color} size-8 sm:size-6`}
					onClick={() => handleClick(index)}
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
