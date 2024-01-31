export default function AddButton({ size }: { size: Size }): React.JSX.Element {
	return (
		<div>
			<br />

			<button className='flex bg-violet1 p-1 rounded-md'>
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
