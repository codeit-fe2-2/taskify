import Image from 'next/image';

import { Size } from './Chips';

export default function DotNameTagChip({
	children,
	size,
}: {
	children: React.ReactNode;
	size: Size;
}): React.JSX.Element {
	return (
		<button className='flex items-center gap-2 rounded-[11px] bg-violet1 p-2 '>
			<Image
				src='/icons/chip_ellipse_sm_purple.svg'
				width={size}
				height={size}
				alt='chip dot purple'
			/>
			<div className='text-violet2'>{children}</div>
		</button>
	);
}
