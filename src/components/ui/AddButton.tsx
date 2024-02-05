import Image from 'next/image';

import { Size } from './Chips/Chips';

export default function AddButton({ size }: { size: Size }): React.JSX.Element {
	return (
		<div>
			<button className='flex rounded-md bg-violet1 p-1'>
				<Image
					src='/icons/chip_add.svg'
					width={size}
					height={size}
					alt='chip add'
				/>
			</button>
		</div>
	);
}
