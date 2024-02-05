import Image from 'next/image';

export default function DotNameTagChip({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element {
	return (
		<div>
			<button className='m-2 flex items-center gap-2 rounded-[20px] bg-violet1 px-[14px] py-[4px] align-middle '>
				<Image
					src='/icons/chip_ellipse_sm_purple.svg'
					alt='chip dot purple'
					width={2}
					height={2}
					className='sm:size-[6px] md:size-[6px] lg:size-[8px]'
				/>
				<div className='text-violet2 sm:text-[15px] md:text-[15px] lg:text-[18px]'>
					{children}
				</div>
			</button>
		</div>
	);
}
