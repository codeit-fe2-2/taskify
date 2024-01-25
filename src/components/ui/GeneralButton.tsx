import React, { MouseEvent } from 'react';

type event = MouseEvent<HTMLButtonElement>;

interface GeneralButtonProps {
	children: string;
	onClick: (event: event) => void;
	isDisabled?: boolean;
}

const GeneralButton: React.FC<GeneralButtonProps> = ({
	children,
	onClick,
	isDisabled = false,
}: GeneralButtonProps) => {
	return (
		<div className='flex justify-center'>
			<button
				className={`${getButtonStyle(children, isDisabled)}`}
				onClick={onClick}
				disabled={isDisabled}
			>
				{children}
			</button>
		</div>
	);
};

const getButtonStyle = (children: string, isDisabled: boolean) => {
	switch (children) {
		case '로그인':
			return `w-[350px] h-[50px] text-[18px] rounded-lg text-white ${
				isDisabled
					? 'bg-[#9FA6B2] cursor-not-allowed'
					: 'bg-[#5534DA] cursor-pointer'
			} lg:w-[520px]`;
		case '수락':
			return `w-[109px] h-7 text-[12px] rounded-[4px] bg-[#5534DA] text-white cursor-pointer
        md:w-[72px] md:text-sm  md:h-[30px] lg:w-[84px] lg:text-sm lg:h-8`;

		case '거절':
			return `w-[109px] h-7 text-[12px] rounded-[4px] bg-white text-[#5534DA] cursor-pointer border-[1px] border-[#D9D9D9]
        md:w-[72px] md:text-sm  md:h-[30px] lg:w-[84px] lg:text-sm lg:h-8`;

		case '삭제':
			return `w-[52px] h-7 text-sm rounded-[4px] bg-white text-[#5534DA] cursor-pointer border-[1px] border-[#D9D9D9]
        lg:w-[84px] lg:text-[12px]`;

		case '대시보드 삭제하기':
			return `w-[284px] h-[52px] text-[16px] rounded-lg cursor-pointer border-[1px] border-[#D9D9D9]
        lg:w-[320px] lg:h-[62px] lg:text-lg`;

		default:
			return '';
	}
};

export default GeneralButton;
