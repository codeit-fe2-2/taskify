import Image from 'next/image';
import { useState } from 'react';

interface ColorDotButtonsProps {
	onSelectedColor: (color: string) => void;
}

export default function ColorDotButton({
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
							{/* to Reviewers에 있던 Image 태그가 아마 이걸 의미하는 거 같은데,
							여길 보니까 22로 고정되어 있네요. 이 값을 따로 빼서 변수로
							만들던지 하면 될 거 같습니다. 아니면 Image에 width과 height 대신
							fill을 넣어두고, Image를 감싸는 div에 사이즈를 지정하는 방법도
							있어요. w-[nnpx], md:w-[22px], sm:w-[22px]같은 방식으로 해결하시면
							될 거 같습니다. */}
						</div>
					)}
				</button>
			))}
		</div>
	);
}
