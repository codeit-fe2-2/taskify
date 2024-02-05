import Image from 'next/image';
import { useState } from 'react';

export default function ColorDotButtons() {
	const [selectedButton, setSelectedButton] = useState<number | null>(null);

	const colors = ['bg-green', 'bg-pink', 'bg-blue', 'bg-purple', 'bg-orange'];

	const handleClick = (buttonIndex: number) => {
		if (selectedButton === buttonIndex) {
			setSelectedButton(null);
		} else {
			setSelectedButton(buttonIndex);
		}
	};

	return (
		<div className='relative flex gap-1'>
			{colors.map((color, index) => (
				<button
					key={index}
					className={`relative rounded-full  ${color} sm:size-6 md:size-6 lg:size-8`}
					onClick={() => handleClick(index + 1)}
				>
					{selectedButton === index + 1 && (
						<div
							className='absolute'
							style={{
								left: '50%',
								top: '50%',
								transform: 'translate(-50%, -50%)',
							}}
						>
							<Image
								src='/icons/chip_check.svg'
								width={22}
								height={22}
								alt='check icon'
							/>
						</div>
					)}
				</button>
			))}
		</div>
	);
}
