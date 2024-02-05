import Image from 'next/image';

import { Size } from './Chips';

export default function DotTags({
	children,
	size,
}: {
	children: React.ReactNode;
	size: Size;
}): React.JSX.Element {
	return (
		<div>
			<button className='flex items-center gap-2 rounded-[11px] bg-violet1 p-2 align-middle'>
				<Image
					src='/icons/chip_ellipse_sm_purple.svg'
					width={size}
					height={size}
					alt='chip dot purple'
				/>
				<div className='text-violet2'>{children}</div>
			</button>
		</div>
	);
}
