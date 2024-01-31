export default function ColorDots({
	bgColor,
	height,
	width,
}: {
	bgColor: string;
	height: string;
	width: string;
}) {
	return (
		<button className={`rounded-full ${bgColor} ${height} ${width}`}></button>
	);
}
