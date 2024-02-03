/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useCallback, useRef } from 'react';

import TextButton from '../Button/TextButton';

interface AlertModalProps {
	message: string;
	content: string;
	onCancel: () => void;
	submitButton?: boolean;
	submitContent?: string;
	onSubmit?: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
	message,
	content,
	onCancel,
	submitButton = false,
	onSubmit,
	submitContent,
}) => {
	const modalBackground = useRef<HTMLDivElement>(null);

	const handleModalBackgroundClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (e.target === modalBackground.current) {
				onCancel();
			}
		},
		[onCancel],
	);
	const buttonClasses = submitButton
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
					<TextButton
						buttonSize='md'
						textSize='md'
						color={submitButton ? 'secondary' : 'primary'}
						onClick={() => {
							onCancel();
						}}
					>
						{content}
					</TextButton>

					{submitButton && (
						<TextButton
							buttonSize='md'
							textSize='md'
							color='primary'
							onClick={() => {
								onSubmit?.();
							}}
						>
							{submitContent}
						</TextButton>
					)}
				</div>
			</div>
		</div>
	);
};

export default AlertModal;
