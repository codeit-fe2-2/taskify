import AddButton from '../AddButton';

export default function AddCard() {
	return (
		<div className='flex h-8 w-full items-center justify-center rounded-[6px] border-[1px] border-solid border-gray3'>
			<AddButton
				handleCreateNew={() => {
					console.log('clicked');
				}}
			/>
		</div>
	);
}
