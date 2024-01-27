import React, { ReactNode } from 'react';

interface ButtonProps {
	buttonSize?: 'sm' | 'md' | 'lg' | 'xl';
	textSize?: 'small' | 'large';
	color?: 'primary' | 'secondary';
	children?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	fullWidth?: boolean;
	className?: string;
}

const GeneralButton: React.FC<ButtonProps> = ({
	buttonSize,
	textSize,
	color,
	children,
	onClick,
	disabled = false,
	className,
	fullWidth,
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
						: '';

	const textSizeClasses =
		textSize === 'small'
			? 'text-[12px] md:text-[14px] lg:text-[14px]'
			: textSize === 'large'
				? 'text-lg'
				: '';

	const colorClasses =
		color === 'primary'
			? disabled
				? 'bg-gray4 text-white rounded-md'
				: 'bg-violet2 text-white rounded-md'
			: color === 'secondary'
				? ' text-black4 border-[1px] border-gray3 rounded-md'
				: '';

	const buttonFullClasses = fullWidth ? 'w-full' : '';
	const disabledClasses = disabled ? 'text-white cursor-not-allowed ' : '';

	return (
		<button
			className={`${disabledClasses} ${textSizeClasses} ${colorClasses} ${buttonSizeClasses} ${buttonFullClasses} ${className} `}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default GeneralButton;
