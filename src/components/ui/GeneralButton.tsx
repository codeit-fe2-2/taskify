import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ButtonProps {
	buttonSize?: 'sm' | 'md' | 'lg' | 'xl' | 'icon';
	textSize?: 'small' | 'large';
	color?: 'primary' | 'secondary';
	children?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	fullWidth?: boolean;
	className?: string;
	src?: string;
	iconSize?: string;
}

const GeneralButton2: React.FC<ButtonProps> = ({
	buttonSize,
	textSize = 'small',
	color,
	children,
	onClick,
	disabled = false,
	className,
	fullWidth,
	src,
	iconSize,
}) => {
	const buttonSizeClasses =
		buttonSize === 'sm'
			? `px-[29px] py-[7px] sm:px-[9px] sm:py-[7px]`
			: buttonSize === 'md'
				? `px-[29px] py-[7px] md:px-[72px] md:py-[23px] sm:px-[37px] sm:py-[7px]`
				: buttonSize === 'lg'
					? `py-[20px] px-[95px] sm:px-[84px] sm:py-[16px]`
					: buttonSize === 'xl'
						? 'px-[236.5px] py-[14.5px] sm:px-[152px] '
						: buttonSize === 'icon'
							? ' size-[36px] lg:size-[40px]'
							: '';

	const textSizeClasses =
		textSize === 'small'
			? 'text-[12px] md:text-[14px] lg:text-[14px]'
			: textSize === 'large'
				? 'text-lg'
				: '';

	const colorClasses =
		color === 'primary'
			? 'bg-violet2 text-white rounded-md'
			: color === 'secondary'
				? 'text-violet2 border-gray4 border-[1px] rounded-md'
				: '';

	const buttonFullClasses = fullWidth ? 'w-full' : '';
	const disabledClasses = disabled ? ' text-white cursor-not-allowed' : '';
	const iconSizeClasses = iconSize ? iconSize : 'w-[16px] h-[16px] ';
	return (
		<button
			className={`${className} ${disabledClasses} ${textSizeClasses} ${colorClasses} ${buttonSizeClasses} ${buttonFullClasses}`}
			onClick={onClick}
			disabled={disabled}
		>
			{src ? (
				<div className={`relative flex justify-center ${iconSizeClasses}`}>
					<Image src={src} alt='Image Alt Text' fill />
				</div>
			) : (
				children
			)}
		</button>
	);
};

export default GeneralButton2;
