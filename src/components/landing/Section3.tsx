import clsx from 'clsx';
import Image from 'next/image';

interface Section3Props {
	src: string;
	alt: string;
	padding: 'sm' | 'md' | 'lg';
	height: number;
	title: string;
	description: string;
}

export default function Section3({
	src,
	alt,
	padding,
	height,
	title,
	description,
}: Section3Props) {
	const paddingClasses = clsx({
		'py-[68px]': padding === 'lg',
		'py-[32px]': padding === 'md',
		'pb-[18px] pt-[11px]': padding === 'sm',
	});
	return (
		<div className='col-span-1 grid w-[378px] '>
			<div
				className={`flex  justify-center ${paddingClasses} rounded-t-lg bg-gray2 dark:bg-black1`}
			>
				<Image src={src} width={300} height={height} alt={alt} />
			</div>
			<div className='flex flex-col gap-[18px] rounded-b-lg bg-gray1 px-8 py-[33px] dark:bg-black3 dark:text-white'>
				<p className='text-lg font-bold leading-5'>{title}</p>
				<p className='text-base font-medium leading-5'>{description}</p>
			</div>
		</div>
	);
}
