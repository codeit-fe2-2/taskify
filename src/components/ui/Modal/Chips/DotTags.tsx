export default function DotTags({
	children,
	width,
	height,
}: {
	children: React.ReactNode;
	width: number;
	height: number;
}): React.JSX.Element {
	return (
		<div>
			<button className='flex items-center align-middle bg-violet1 rounded-2xl px-2 py-2 gap-2 '>
				<Image
					src='/icons/chip_ellipse_sm_purple.svg'
					width={width}
					height={height}
					alt='chip dot purple'
				/>
				<div className='text-violet2'>{children}</div>
			</button>
		</div>
	);
}
