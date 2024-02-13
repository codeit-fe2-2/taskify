import { SVGIcons } from '@/src/constants/icons';

type IconName = typeof SVGIcons;

interface Props {
	name: keyof IconName;
	width: number;
	height: number;
	className?: string;
	color?: string;
}

export default function Icon({
	name,
	width,
	height,
	color,
	className,
	...props
}: Props) {
	const icon = SVGIcons[name];

	return (
		<svg
			dangerouslySetInnerHTML={{ __html: icon }}
			viewBox={`0 0 ${width} ${height}`}
			width={width}
			height={height}
			stroke={color}
			className={className}
			{...props}
		></svg>
	);
}
