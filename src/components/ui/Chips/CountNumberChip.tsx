import { useEffect, useState } from 'react';

interface CountNumberChipProps {
	initialValue: number;
}

export default function CountNumberChip({
	initialValue,
}: CountNumberChipProps): React.ReactElement {
	const [count, setCount] = useState(initialValue);

	useEffect(() => {
		setCount((prevCount) => prevCount + 1);
	});

	return (
		<div className='flex w-6 justify-center gap-10 rounded-[4px] bg-gray2 px-[6px] py-[3px] align-middle text-gray5'>
			{count}
		</div>
	);
}
