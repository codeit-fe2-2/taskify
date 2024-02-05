import Image from 'next/image';

interface AddButtonProps {
	handleCreateNew: () => void;
}

export default function AddButton({
	handleCreateNew,
}: AddButtonProps): React.JSX.Element {
	return (
		<div>
			<button
				onClick={handleCreateNew}
				className='flex rounded-md bg-violet1 p-1'
			>
				<Image
					src='/icons/chip_add.svg'
					width={14}
					height={14}
					alt='chip add'
					className='sm:size-[14.5px] md:size-[14.5px] lg:size-[16px]'
				/>
			</button>
		</div>
	);
}
