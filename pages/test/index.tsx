import ModalInput from '@/src/components/ui/ModalInput/ModalInput';

export default function Page() {
	const handleValue = (value: string[]) => {
		console.log(value[0]);
	};
	return (
		<div className='flex flex-col gap-6 bg-gray2 p-1'>
			<ModalInput label='마감일' onValueChange={handleValue} />
		</div>
	);
}
