export default function ColorTagChip({
	children,
	textColor,
	bgColor,
	fontSize,
}: {
	children: React.ReactNode;
	textColor: string;
	bgColor: string;
	fontSize: string;
}): React.JSX.Element {
	return (
		<div>
			<button
				className={`${textColor} ${bgColor} ${fontSize < '12' ? 'text-xs' : 'text-base'} rounded-[4px] px-[6px] py-[4px] text-sm`}
			>
				{children}
			</button>
		</div>
	);
}
