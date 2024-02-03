/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useCallback, useRef } from 'react';

import TextButton from '../Button/TextButton';

interface AlertModalProps {
	message: string;
	onClick?: () => void;
	content: string;
	secondButton?: boolean;
	secondOnClick?: () => void;
	secondContent?: string;
	onClose?: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
	message,
	onClick,
	content,
	secondButton = false,
	secondOnClick,
	secondContent,
	onClose,
}) => {
	const modalBackground = useRef<HTMLDivElement>(null);

	const handleModalBackgroundClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (e.target === modalBackground.current) {
				onClose?.();
			}
		},
		[onClose],
	);
	const buttonClasses = secondButton
		? 'flex gap-3 sm:right-5'
		: 'sm:right-[94px]';
	return (
		<div
			ref={modalBackground}
			onClick={handleModalBackgroundClick}
			className='fixed left-0 top-0 flex size-full items-center justify-center bg-black4 bg-opacity-70'
		>
			<div className='relative h-[250px] w-[540px] rounded-lg bg-white text-center sm:h-[220px] sm:w-[327px]'>
				<p className='mt-[108px] text-lg font-medium leading-5 sm:mt-[81px] sm:text-base'>
					{message}
				</p>
				<div className={`${buttonClasses} absolute bottom-7 right-7`}>
					{secondButton && (
						<TextButton
							buttonSize='md'
							textSize='md'
							color='secondary'
							onClick={() => {
								secondOnClick?.();
							}}
						>
							{secondContent}
						</TextButton>
					)}
					<TextButton
						buttonSize='md'
						textSize='md'
						color='primary'
						onClick={() => {
							onClick?.();
						}}
					>
						{content}
					</TextButton>
				</div>
			</div>
		</div>
	);
};

export default AlertModal;
