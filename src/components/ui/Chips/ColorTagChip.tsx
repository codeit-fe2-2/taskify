export default function ColorTagChip({
	children,
	onTagClick,
}: {
	children: string;
	onTagClick?: (children: string) => void;
}): React.JSX.Element {
	const tagColorSet = [
		{ textColor: 'text-sortTextGreen', bgColor: 'bg-sortTextBgGreen' },
		{ textColor: 'text-sortTextPink', bgColor: 'bg-sortTextBgPink' },
		{ textColor: 'text-sortTextBlue', bgColor: 'bg-sortTextBgBlue' },
		{ textColor: 'text-sortTextOrange', bgColor: 'bg-sortTextBgOrange' },
		{ textColor: 'text-violet2', bgColor: 'bg-violet1' },
	];

	const colorIndex = children.length % tagColorSet.length;

	const { textColor, bgColor } = tagColorSet[colorIndex];

	const handleClick = () => {
		onTagClick(children);
	};

	return (
		<button
			onClick={handleClick}
			className={`${textColor} ${bgColor} h-[22px] whitespace-nowrap rounded-[4px] px-1 text-center align-middle text-xs font-normal sm:h-5 sm:text-[10px]`}
		>
			{children}
		</button>
	);
}
