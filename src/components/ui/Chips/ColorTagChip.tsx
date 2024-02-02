export default function ColorTagChip({
	children,
	fontSize,
}: {
	children: React.ReactNode;
	fontSize: string;
}): React.JSX.Element {
	const tagColorSet = [
		{ textColor: 'text-sortTextGreen', bgColor: 'bg-sortTextBgGreen' },
		{ textColor: 'text-sortTextPink', bgColor: 'bg-sortTextBgPink' },
		{ textColor: 'text-sortTextBlue', bgColor: 'bg-sortTextBgBlue' },
		{ textColor: 'text-sortTextOrange', bgColor: 'bg-sortTextBgOrange' },
		{ textColor: 'text-violet2', bgColor: 'bg-violet1' },
	];

	const textLength = typeof children === 'string' ? children.length : 1;

	const colorIndex = textLength % 5;

	const { textColor, bgColor } = tagColorSet[colorIndex];

	return (
		<div>
			<button
				className={`${textColor} ${bgColor} ${fontSize < '12' ? 'text-base' : 'text-xs'} rounded-[4px] px-[6px] py-[4px] text-sm`}
			>
				{children}
			</button>
		</div>
	);
}
