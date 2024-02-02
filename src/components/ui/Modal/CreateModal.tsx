/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';

import TextButton from '@/src/components/ui/Button/TextButton';
import { Column } from '@/src/types/dashboard';

import ColorDotChip from '../ColorDotChip';

interface CreateModalProps {
	modalSize: 'sm' | 'lg';
	title: string;
	subTitle: string;
	onClick?: () => void;
	secondOnClick?: () => void;
	columns: Column[];
}

const CreateModal: React.FC<CreateModalProps> = ({
	modalSize,
	title,
	subTitle,
	onClick,
	secondOnClick,
	columns,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [inputError, setInputError] = useState(false);
	const modalBackground = useRef<HTMLDivElement>(null);
	const [selectColor, setSelectColor] = useState('green');

	const colors = ['green', 'purple', 'orange', 'blue', 'pink'];

	//모달 배경화면 클릭하면 모달창 꺼지는 함수
	const handleModalBackgroundClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (e.target === modalBackground.current) {
				secondOnClick?.();
			}
		},
		[secondOnClick],
	);

	//input 컬럼의 중복여부 mockdata를 사용해서 구현하였음
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setInputValue(value);

		const isDuplicate = columns?.some(
			(column) => column.title === value.trim(),
		);
		setInputError(!!isDuplicate);
	};

	//체크와 관련된 color 선택 부분 추후 생성에도 값을 넣어 보낼 예정
	const handleSelectColorChange = (color: string) => {
		setSelectColor(color);
	};
	const modalSizeClasses = clsx({
		'sm:px-5 sm:py-7 px-7 pt-8 pb-7': modalSize === 'sm',
		'px-7 pt-8 pb-7 sm:px-5 sm:py-7': modalSize === 'lg',
	});
	const errorMessage = clsx({
		'중복된 컬럼 이름입니다.': modalSize === 'sm',
	});
	return (
		<div
			ref={modalBackground}
			onClick={handleModalBackgroundClick}
			className='fixed left-0 top-0 flex size-full items-center justify-center bg-black4 bg-opacity-70'
		>
			<div className={` rounded-lg bg-white ${modalSizeClasses}`}>
				<p className=' text-2xl font-bold leading-7 sm:text-xl'>{title}</p>
				<form>
					<div className='mt-8 flex flex-col sm:mt-7'>
						<label
							htmlFor='name'
							className='text-lg font-medium leading-5 sm:text-base sm:leading-5'
						>
							{subTitle}
						</label>
						<input
							type='text'
							maxLength={40}
							className='sm:h-10.5 mt-2.5 h-12 w-[484px] rounded-md border-[1px] border-gray3 pl-4 leading-5 sm:w-[287px] sm:text-sm sm:leading-4 '
							value={inputValue}
							onChange={modalSize === 'sm' ? handleInputChange : undefined}
						/>
						{inputError && (
							<p className='mt-2 text-sm leading-4 text-red'>{errorMessage}</p>
						)}
					</div>
					{modalSize === 'lg' && (
						<div className='mt-7 flex gap-2'>
							{colors.map((color, index) => (
								<ColorDotChip
									key={index}
									color={color}
									isSelected={color === selectColor}
									onClick={handleSelectColorChange}
								/>
							))}
						</div>
					)}
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
							disabled={inputError}
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
