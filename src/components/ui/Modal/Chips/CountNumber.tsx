export default function CountNumber({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element {
	return (
		<div>
			<div className='flex justify-center align-middle w-6 bg-gray2 gap-10 rounded-md text-gray5'>
				{children}
			</div>
		</div>
	);
}
