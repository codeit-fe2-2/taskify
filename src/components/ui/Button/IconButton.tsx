import Image from 'next/image';
import { ReactNode } from 'react';

interface iconButtonProps {
	buttonSize?: 'sm' | 'md' | 'lg';
	rounded?: 'right' | 'left';
	onClick?: () => void;
	src?: string;
	disabled?: boolean;
	children?: ReactNode;
	iconSize?: number;
	className?: string;
	alt?: string;
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
}: iconButtonProps) => {
	const buttonSizeClasses =
		buttonSize === 'sm'
			? `p-[12px] sm:p-[10px]`
			: buttonSize === 'md'
				? `w-full h-[40px] sm:h-[32px] text-[16px]`
				: buttonSize === 'lg'
					? `w-full lg:w-[354px] h-[70px] sm:h-[60px] text-xl text-lg`
					: '';
	const roundedSizeClasses =
		rounded === 'right'
			? `rounded-r-[4px]`
			: rounded === 'left'
				? `rounded-l-[4px]`
				: 'rounded-md';
	const srcClasses = disabled
		? rounded === 'right'
			? '/icons/arrowNextDisabled.svg'
			: '/icons/arrowBeforeDisabled.svg'
		: `${src}`;

	return (
		<button
			className={`${className} border-[1px] border-gray3  ${buttonSizeClasses} ${roundedSizeClasses} ${disabled ? 'cursor-not-allowed' : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			<div
				className={`flex items-center justify-center gap-3 rounded-r-[4px] ${children ? '' : ''}`}
			>
				{children}
				<Image
					src={`${srcClasses}`}
					alt={alt}
					width={iconSize}
					height={iconSize}
				/>
			</div>
		</button>
	);
};

export default IconButton;
