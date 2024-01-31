export default function ColorTags({
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
				className={`${textColor} ${bgColor} ${fontSize <= '10' ? 'text-xs' : 'text-base'} px-3 py-2 rounded-lg text-xs`}
			>
				{children}
			</button>
		</div>
	);
}
