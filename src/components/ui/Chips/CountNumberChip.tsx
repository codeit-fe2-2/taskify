interface CountNumberChipProps {
	count: number;
}

export default function CountNumberChip({
	count,
}: CountNumberChipProps): React.ReactElement {
	return (
		<div className='inline-flex w-6 justify-center gap-10 rounded-[4px] bg-gray2 px-[6px] py-[3px] align-middle text-gray5'>
			{count}
		</div>
	);
}
