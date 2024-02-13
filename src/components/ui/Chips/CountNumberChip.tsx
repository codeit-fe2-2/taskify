interface CountNumberChipProps {
	count: number;
}

export default function CountNumberChip({
	count = 0,
}: CountNumberChipProps): React.ReactElement {
	return (
		<div className='flex justify-center gap-10 rounded-[4px] bg-gray2 px-[6px] py-[3px] align-middle text-xs text-gray5'>
			{count}
		</div>
	);
}
