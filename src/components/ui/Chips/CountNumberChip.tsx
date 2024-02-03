export default function CountNumber({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element {
	return (
		<div className='flex w-6 justify-center gap-10 rounded-[4px] bg-gray2 px-[6px] py-[3px] align-middle text-gray5'>
			{children}
		</div>
	);
}
