import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

//lg 새로운 칼럼 추가하기 md 새로운 대시보드 추가 sm 화살표 버튼 xs 그냥 plus img

interface iconButtonProps {
	buttonSize?: 'xs' | 'sm' | 'md' | 'lg';
	rounded?: 'right' | 'left' | 'md' | 'lg';
	onClick?: () => void;
	src: string;
	disabled?: boolean;
	children?: ReactNode;
	iconSize: number;
	className?: string;
	alt: string;
	fullWidth?: boolean;
}

const IconButton = ({
	onClick,
	src = '',
	disabled = false,
	rounded,
	buttonSize,
	children,
	iconSize,
	className,
	alt = '',
	fullWidth,
}: iconButtonProps) => {
	const buttonSizeClasses = clsx({
		'p-[12px] sm:p-[10px]': buttonSize === 'xs',
		'px-[146px] py-[9px] md:px-[261px] sm:px-[132px] sm:py-[6px]':
			buttonSize === 'sm',
		'px-[98.5px] py-[24px] md:px-[56px] md:py-[23px] sm:px-[69.5px] sm:py-[19px] sm:text-[14px] text-[16px]':
			buttonSize === 'md',
		'px-[85.5px] py-[24px] md:px-[180.5px]  sm:px-[60px] sm:py-[20.5px] sm:text-xl text-lg':
			buttonSize === 'lg',
	});

	const roundedSizeClasses = clsx({
		'rounded-r-[4px]': rounded === 'right',
		'rounded-l-[4px]': rounded === 'left',
		'rounded-md': rounded === 'md',
		'rounded-lg': rounded === 'lg',
	});

	const disabledStyle = disabled ? { filter: 'invert(100%)' } : {};
	const widthFullClasses = fullWidth && 'w-full';
	return (
		<button
			className={`${className} border-[1px] border-gray3 ${widthFullClasses}  ${buttonSizeClasses} ${roundedSizeClasses} ${
				disabled && 'cursor-not-allowed'
			}`}
			onClick={onClick}
			disabled={disabled}
		>
			<div
				className={`flex items-center justify-center rounded rounded-r-[4px] text-lg ${
					children && 'gap-3'
				}`}
			>
				<span className={`font-semibold`}>{children}</span>
				<Image
					src={src}
					alt={alt}
					width={iconSize}
					height={iconSize}
					style={disabledStyle}
				/>
			</div>
		</button>
	);
};

export default IconButton;
