import clsx from 'clsx';
import React, { useState } from 'react';

import TextButton from '@/src/components/ui/Button/TextButton';
import ColorDotButtons from '@/src/components/ui/Chips/ColorDotButtons';
import { Column } from '@/src/types/dashboard';

interface CreateModalProps {
	modalSize?: 'sm' | 'lg';
	title: string;
	subTitle: string;

	onCancel: () => void;
	columns?: Column[] | undefined;
	className?: string;
	onColumnSubmit?: (inputValue: string) => Promise<void>;
	onDashBoardSubmit?: (
		inputValue: string,
		selectColor: string,
	) => Promise<void>;
}

const CreateModal: React.FC<CreateModalProps> = ({
	modalSize,
	title,
	subTitle,
	onColumnSubmit,
	onDashBoardSubmit,
	onCancel,
	columns,
	className,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [inputError, setInputError] = useState(false);
	const [selectColor, setSelectColor] = useState<string>('green');

	const handleSelectorColor = (color: string) => {
		setSelectColor(color);
	};

	//input 컬럼의 중복여부 mockdata를 사용해서 구현하였음
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setInputValue(value);
		if (modalSize === 'sm') {
			const isDuplicate =
				columns && columns.some((column) => column.title === value.trim());

			setInputError(!!isDuplicate);
		}
	};
	//체크와 관련된 color 선택 부분 추후 생성에도 값을 넣어 보낼 예정
	const handleSubmit = () => {
		if (modalSize === 'lg' && onDashBoardSubmit) {
			void onDashBoardSubmit(inputValue, selectColor);
			console.log(selectColor, inputValue);
		} else if (onColumnSubmit) {
			void onColumnSubmit(inputValue);
		}
	};
	const modalSizeClasses = clsx({
		'sm:px-5 sm:py-7 px-7 pt-8 pb-7': modalSize === 'sm',
		'px-7 pt-8 pb-7 sm:px-5 sm:py-7': modalSize === 'lg',
	});
	const errorMessage = clsx({
		'중복된 컬럼 이름입니다.': modalSize === 'sm',
	});
	return (
		<div className={` rounded-lg bg-white ${className} ${modalSizeClasses}`}>
			<p className=' text-2xl font-bold leading-7 sm:text-xl'>{title}</p>

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
					className='sm:h-10.5 mt-2.5 h-12 w-[484px] rounded-md border-[1px] border-gray3 pl-4 leading-5 sm:mb-6 sm:w-[287px] sm:text-sm sm:leading-4 '
					value={inputValue}
					onChange={handleInputChange}
				/>
				{inputError && (
					<p className='mt-2 text-sm leading-4 text-red'>{errorMessage}</p>
				)}
			</div>

			{modalSize === 'lg' && (
				<ColorDotButtons handleSelectorColor={handleSelectorColor} />
			)}
			<div className={`mt-7 flex justify-end gap-3 sm:mt-6 sm:justify-center`}>
				<TextButton
					buttonSize='md'
					textSize='md'
					color='secondary'
					onClick={onCancel}
				>
					취소
				</TextButton>
				<TextButton
					buttonSize='md'
					type='submit'
					textSize='md'
					color='primary'
					disabled={inputError}
					onClick={handleSubmit}
				>
					생성
				</TextButton>
			</div>
		</div>
	);
};

export default CreateModal;
