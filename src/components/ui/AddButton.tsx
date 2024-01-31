import Image from 'next/image';

export enum Size {
	Xsmall = 6,
	Small = 8,
	Medium = 14.5,
	Large = 16,
}

export default function AddButton({ size }: { size: Size }): React.JSX.Element {
	return (
		<div>
			<br />
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
