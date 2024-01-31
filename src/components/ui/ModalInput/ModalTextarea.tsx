import React, { ChangeEvent, useRef } from 'react';

import { inputClassNames } from './inputClassNames';

interface ModalTextareaProps {
	label: string;
	required: boolean;
	isButton: boolean;
	onTextChange: (value: string) => void;
}

export default function ModalTextarea({
	label,
	required,
	isButton,
	onTextChange,
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
				{/* 차후 button 컴포넌트 삽입 예정(크기와 위치만 맞춘 임시 버튼) */}
				{isButton && (
					<button className='absolute bottom-3 right-3 flex h-8 w-[83px] shrink-0 items-center justify-center gap-2.5 border border-solid border-gray3 px-[31px] py-[9px]' />
				)}
			</div>
		</div>
	);
}
