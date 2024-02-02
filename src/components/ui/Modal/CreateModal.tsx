/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';

import TextButton from '../Button/TextButton';

interface CreateModalProps {
	modalSize: 'sm' | 'lg';
	title: string;
	subTitle: string;
	onClick?: () => void;
	secondOnClick?: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({
	modalSize,
	title,
	subTitle,
	onClick,
	secondOnClick,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [inputError, setInputError] = useState(false);

	const modalBackground = useRef<HTMLDivElement>(null);
	//모달 배경화면 클릭시 닫히는 함수
	const handleModalBackgroundClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (e.target === modalBackground.current) {
				secondOnClick?.();
			}
		},
		[secondOnClick],
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);

		setInputError(() => {
			return value.trim() === '';
		});
	};

	const modalSizeClasses = clsx({
		'px-7 pt-8 pb-7 sm:px-5 sm:py-7': modalSize === 'sm',
		'px-10 pt-10': modalSize === 'lg',
	});
	const errorMessage = clsx({
		'중복된 컬럼 이름입니다.': modalSize === 'sm',
		'필수입력 사항입니다.': modalSize === 'lg',
	});
	return (
		<div
			ref={modalBackground}
			onClick={handleModalBackgroundClick}
			className='fixed left-0 top-0 flex size-full items-center justify-center bg-black4 bg-opacity-70'
		>
			<div className={` rounded-lg bg-white ${modalSizeClasses}`}>
				<p className=' text-2xl font-bold leading-7 sm:text-xl'>{title}</p>
				<form onSubmit=''>
					<div className='mt-8 flex flex-col sm:mt-7'>
						<label
							htmlFor='name'
							className='leading-5.2 text-lg font-medium sm:text-base sm:leading-5'
						>
							{subTitle}
						</label>
						<input
							type='text'
							maxLength={40}
							className='w-121 mt-2.5 h-12 rounded-md border-[1px] border-gray3 leading-5 sm:h-8 sm:w-[287px] sm:text-sm sm:leading-4 '
							value={inputValue}
							onChange={handleInputChange}
						/>
						{inputError && <p className='text-red'>{errorMessage}</p>}
					</div>
					<div
						className={`mt-7 flex justify-end gap-3 sm:mt-6 sm:justify-center`}
					>
						<TextButton
							buttonSize='md'
							textSize='md'
							color='secondary'
							onClick={() => {
								secondOnClick?.();
							}}
						>
							취소
						</TextButton>
						<TextButton
							buttonSize='md'
							textSize='md'
							color='primary'
							disabled={true}
							onClick={() => {
								onClick?.();
							}}
						>
							생성
						</TextButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateModal;
