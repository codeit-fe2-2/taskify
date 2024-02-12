import React from 'react';

import TextButton from '../Button/TextButton';

interface AlertModalProps {
	message: string;
	cancelButtonName: string;
	secondButton?: boolean;
	SubmitButtonName?: string;
	onSubmit?: () => void;
	onCancel: () => void;
}

export default function AlertModal({
	message,
	onSubmit,
	cancelButtonName,
	secondButton = false,
	onCancel,
	SubmitButtonName,
}: AlertModalProps) {
	const buttonClasses = secondButton
		? 'flex gap-3 sm:right-5'
		: 'sm:right-[94px]';
	return (
		<div className='relative flex h-[250px] w-[540px]  justify-center rounded-lg bg-white text-center sm:h-[220px] sm:w-[327px]'>
			<p className='mt-[108px] text-lg font-medium leading-5 sm:mt-[81px] sm:text-base'>
				{message}
			</p>
			<div className={`${buttonClasses} absolute bottom-7 right-7`}>
				<TextButton
					buttonSize='md'
					textSize='md'
					color={secondButton ? 'secondary' : 'primary'}
					onClick={onCancel}
				>
					{cancelButtonName}
				</TextButton>

				{secondButton && (
					<TextButton
						buttonSize='md'
						textSize='md'
						color='primary'
						onClick={onSubmit}
					>
						{SubmitButtonName}
					</TextButton>
				)}
			</div>
		</div>
	);
}
