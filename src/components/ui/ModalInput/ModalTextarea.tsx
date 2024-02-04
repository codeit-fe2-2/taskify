import React, { ChangeEvent, useRef } from 'react';

import TextButton from '../Button/TextButton';
import { inputClassNames } from './inputClassNames';

interface ModalTextareaProps {
	label: string;
	required: boolean;
	isButton: boolean;
	onTextChange: (value: string) => void;
	onButtonClick?: () => void; // 새로 추가한 함수
}

export default function ModalTextarea({
	label,
	required,
	isButton,
	onTextChange,
	onButtonClick, // 새로 추가한 함수
}: ModalTextareaProps): JSX.Element {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
		onTextChange(event.target.value);
	};

	const handleButtonClick = () => {
		onButtonClick();
	};

	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<label htmlFor='comment' className='text-lg font-medium'>
				{label} {required && <span className='text-violet2'>*</span>}
			</label>
			<div
				className={`${inputClassNames.textareaStyle} ${inputClassNames.container} ${inputClassNames.type.textarea} `}
			>
				<textarea
					ref={textareaRef}
					name='comment'
					id='comment'
					placeholder={
						label === '설명' ? `${label}을 입력해주세요` : `${label} 작성하기`
					}
					onChange={handleTextareaChange}
					className='size-full resize-none rounded-md border-none outline-none'
				/>
				{isButton && (
					<TextButton
						color='secondary'
						buttonSize='xxs'
						onClick={handleButtonClick}
						className='absolute bottom-3 right-3 flex h-8 w-[83px] shrink-0 items-center justify-center gap-2.5 text-xs'
					>
						입력
					</TextButton>
				)}
			</div>
		</div>
	);
}
