import clsx from 'clsx';
import Image from 'next/image';

interface ColorDotChipProps {
	color: string;
	isSelected: boolean;
	onClick: (color: string) => void;
}
export default function ColorDotChip({
	color,
	isSelected,
	onClick,
}: ColorDotChipProps): React.JSX.Element {
	const colorClasses = clsx({
		'bg-green': color === 'green',
		'bg-purple': color === 'purple',
		'bg-orange': color === 'orange',
		'bg-blue': color === 'blue',
		'bg-pink': color === 'pink',
	});

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onClick(color);
	};
	return (
		<button
			className={`size-[30px] rounded-full sm:size-7 ${colorClasses} flex items-center justify-center `}
			onClick={handleButtonClick}
		>
			{isSelected && (
				<Image
					src='/icons/chip_check.svg'
					width={22}
					height={22}
					alt='check icon'
				/>
			)}
		</button>
	);
}
