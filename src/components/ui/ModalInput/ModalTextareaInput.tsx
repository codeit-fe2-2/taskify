import React, { useRef } from 'react';

import { inputClassNames } from './inputClassNames';

interface ModalTextareaInputProps {
	label: string;
}

export default function ModalTextareaInput({
	label,
}: ModalTextareaInputProps): JSX.Element {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleTextareaChange = () => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	};

	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<label htmlFor='comment' className='text-lg font-medium'>
				{label}
			</label>
			<div
				className={`${inputClassNames.textareaStyle} ${inputClassNames.container} ${inputClassNames.type.textarea} `}
			>
				<textarea
					ref={textareaRef}
					name='comment'
					id='comment'
					placeholder='댓글 작성하기'
					onChange={handleTextareaChange}
					className='size-full resize-none rounded-md border-none outline-none'
				/>
				{/* 차후 button 컴포넌트 삽입 예정(크기와 위치만 맞춘 임시 버튼) */}
				<button className='absolute bottom-3 right-3 flex h-8 w-[83px] shrink-0 items-center justify-center gap-2.5 border border-solid border-gray3 px-[31px] py-[9px]' />
			</div>
		</div>
	);
}
