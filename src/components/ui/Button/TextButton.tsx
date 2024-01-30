import clsx from 'clsx';
import React, { ReactNode } from 'react';
// xxs 삭제, xs 입력,  sm 수락거절, md 취소 확인, lg 대시보드삭제하기,  xl로그인
interface ButtonProps {
	type?: 'submit' | 'reset' | 'button';
	buttonSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	textSize?: 'small' | 'medium' | 'large';
	color?: 'primary' | 'secondary' | 'third';
	children?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	fullWidth?: boolean;
	className?: string;
}

const GeneralButton = ({
	type = 'button',
	buttonSize,
	textSize = 'small',
	color,
	children,
	onClick,
	disabled = false,
	className,
	fullWidth,
}: ButtonProps) => {
	const buttonSizeClasses = clsx({
		'px-[29.5px] py-[7.5px] sm:px-[9px] sm:py-[7px]': buttonSize === 'xxs',
		'px-[31px] py-[9px]  sm:py-[7px]': buttonSize === 'xs',
		'px-[29.5px] py-[7.5px] md:px-[23.5px] md:py-[6.5px] sm:px-[44px] sm:py-[7px]':
			buttonSize === 'sm',
		'px-[46px] py-[14px]  sm:px-[56px] sm:py-[12px]': buttonSize === 'md',
		'py-[20px] px-[95px] sm:px-[84px] sm:py-[16px]': buttonSize === 'lg',
		'px-[236.5px] py-[14.5px] sm:px-[152px]': buttonSize === 'xl',
	});

	const textSizeClasses = clsx({
		'text-[12px] md:text-[14px] lg:text-[14px]': textSize === 'small',
		'text-[16px] sm:text-[14px] ': textSize === 'medium',
		'text-lg': textSize === 'large',
	});

	const colorClasses = clsx({
		'bg-violet2 border-[1px] border-violet2 text-white rounded-lg':
			color === 'primary',
		'text-violet2 border-gray4 border-[1px] rounded-lg': color === 'secondary',
		'border-gray4 border-[1px] rounded-lg': color === 'third',
	});

	const buttonFullClasses = fullWidth ? 'w-full' : '';
	const disabledClasses = disabled
		? 'bg-gray4 text-white cursor-not-allowed'
		: '';

	return (
		<button
			type={type}
			className={`${className} ${disabledClasses} ${textSizeClasses} ${colorClasses} ${buttonSizeClasses} ${buttonFullClasses} font-medium`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default GeneralButton;
