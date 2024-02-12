import Image from 'next/image';

export default function DotNameTagChip({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element {
	return (
		<div className='flex items-center gap-2 rounded-[20px] bg-violet1 px-2 py-1 align-middle '>
			<Image
				src='/icons/chip_ellipse_sm_purple.svg'
				alt='보라색 점 아이콘'
				width={2}
				height={2}
				className='size-1.5'
			/>
			<div className='text-xs text-violet2 sm:text-[10px]'>{children}</div>
		</div>
	);
}
