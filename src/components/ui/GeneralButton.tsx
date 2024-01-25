// components/Button.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import arrowBefore from '../../../public/icons/arrowBefore.svg';
import arrowNext from '../../../public/icons/arrowNext.svg';

type ButtonType =
	| 'login'
	| 'accept'
	| 'reject'
	| 'dashboardDelete'
	| 'delete'
	| 'prev'
	| 'next';

interface ButtonProps {
	buttonText: string;
	onClick: () => void;
	isActive?: boolean;
	buttonType: ButtonType;
}

const GeneralButton: React.FC<ButtonProps> = ({
	buttonText,
	onClick,
	isActive = false,
	buttonType,
}: ButtonProps) => {
	const buttonStyle = getButtonStyle(buttonType);

	return (
		<div className='flex justify-center'>
			{buttonText ? (
				<button
					className={`${buttonStyle} ${isActive ? 'cursor-not-allowed' : ''}`}
					onClick={onClick}
					disabled={isActive}
				>
					<span>{buttonText}</span>
				</button>
			) : (
				<Link
					className={`${buttonStyle} ${isActive ? 'cursor-not-allowed' : ''}`}
					href='/'
				>
					<Image
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						src={buttonType === 'next' ? arrowNext : arrowBefore}
						alt={`${buttonType} button`}
						width={16}
						height={16}
					/>
				</Link>
			)}
		</div>
	);
};

const getButtonStyle = (type: ButtonType): string => {
	const styles = {
		login:
			'w-[350px] h-[50px] text-[18px] rounded-lg text-white bg-[#5534DA] cursor-pointer lg:w-[520px]',
		accept:
			'w-[109px] h-7 text-[12px] rounded-[4px] bg-[#5534DA] text-white cursor-pointer md:w-[72px] md:text-sm  md:h-[30px] lg:w-[84px] lg:text-sm lg:h-8',
		reject:
			'w-[109px] h-7 text-[12px] rounded-[4px] bg-white text-[#5534DA] cursor-pointer border-[1px] border-[#D9D9D9] md:w-[72px] md:text-sm  md:h-[30px] lg:w-[84px] lg:text-sm lg:h-8',
		dashboardDelete:
			'w-[284px] h-[52px] text-[16px] rounded-lg cursor-pointer border-[1px] border-[#D9D9D9] lg:w-[320px] lg:h-[62px] lg:text-lg',
		delete:
			'w-[52px] h-7 text-sm rounded-[4px] bg-white text-[#5534DA] cursor-pointer border-[1px] border-[#D9D9D9] lg:w-[84px] lg:text-[12px]',
		next: 'w-9 h-9 flex items-center justify-center rounded-r-[4px] border-[1px] border-[#D9D9D9] lg:w-10 lg:h-10 ',
		prev: 'w-9 h-9 flex items-center justify-center rounded-l-[4px] border-[1px] border-[#D9D9D9] lg:w-10 lg:h-10',
	};

	return styles[type];
};

export default GeneralButton;
