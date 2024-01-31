export default function ColorDotButtons({
	bgColor,
	height,
	width,
}: {
	bgColor: string;
	height: string;
	width: string;
}): React.JSX.Element {
	return (
		<div>
			<button className={`rounded-full ${bgColor} ${height} ${width}`}></button>
		</div>
	);
}
