import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface DashBoardButtonProps {
	id: number;
	color: string;
	title: string;
	createdByMe?: boolean;
	className?: string;
}

const DashBoardButton = ({
	id,
	title,
	color,
	createdByMe = true,
	className,
}: DashBoardButtonProps) => {
	const colorClass = clsx({
		'bg-green': color === 'green',
		'bg-purple': color === 'purple',
		'bg-orange': color === 'orange',
		'bg-pink': color === 'pink',
		'bg-blue': color === 'blue',
	});

	return (
		<Link
			href={`/dashboard/${id}`}
			className={`${className} flex items-center justify-center gap-[166px] rounded-lg border-[1px] border-gray3 px-[20px] py-[25.5px] sm:gap-[114px] sm:p-[20px] md:gap-[89px] md:py-[24.5px]`}
		>
			<div className='flex  items-center '>
				<div className={`${colorClass} size-[8px] rounded-full`}></div>
				<span className='ml-4 mr-2 text-base font-semibold sm:ml-3 sm:mr-1 md:ml-3 md:mr-[6px]'>
					{title}
				</span>
				{createdByMe ? (
					<Image
						src='/icons/crown.svg'
						alt='crown'
						width={20}
						height={16}
						className='sm:h-3 sm:w-[15px] md:h-[14px]   md:w-[17.6px]'
					/>
				) : (
					''
				)}
			</div>
			<div className='flex size-[18px] items-center justify-center'>
				<Image
					src='/icons/arrowNextBig.svg'
					alt='vector'
					width={7.4}
					height={13.9}
				/>
			</div>
		</Link>
	);
};

export default DashBoardButton;
