import Image from 'next/image';
import React, { useState } from 'react';
import Datetime from 'react-datetime';

import { inputClassNames } from './inputClassNames';

type ModalInputType = '제목' | '마감일' | '태그';

interface ModalInputProps {
	label: ModalInputType;
}

export default function ModalInput({
	label: type,
}: ModalInputProps): JSX.Element {
	const [tags, setTags] = useState<string[]>([]); // chip 생기면 대체할 예정
	const [tagInput, setTagInput] = useState<string>('');

	let inputElement;

	const deadlineInputProps = {
		placeholder: '날짜를 입력해주세요',
		className: 'size-full outline-none rounded-md',
	};

	const classNames = `${inputClassNames.container} ${inputClassNames.inputStyle} ${inputClassNames.type.input} ${type === '태그' && 'snap-x scroll-pl-4 flex-row overflow-x-auto scroll-smooth scrollbar-hide'}`;

	const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTagInput(event.target.value);
	};

	const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if (tagInput.trim() !== '' && !tags.includes(tagInput.trim())) {
				setTags([...tags, tagInput.trim()]);
			}
		}
	};

	switch (type) {
		case '제목':
			inputElement = (
				<>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='제목을 입력해주세요'
						className='size-full rounded-md outline-none'
					/>
				</>
			);
			break;

		case '마감일':
			inputElement = (
				<>
					<Image
						src='/icons/calendar.svg'
						width={20}
						height={20}
						alt='Deadline'
					/>
					<Datetime
						dateFormat='YYYY.MM.DD'
						timeFormat='HH:mm'
						inputProps={deadlineInputProps}
					/>
				</>
			);
			break;

		case '태그':
			inputElement = (
				<>
					{
						// chip 생기면 대체할 예정
						tags.map((tag, index) => (
							<p
								key={index}
								className='inline-flex h-full shrink-0 snap-start items-center'
							>
								{tag}
							</p>
						))
					}
					<input
						type='text'
						name='tag'
						id='tag'
						placeholder='입력 후 Enter'
						onChange={handleTagInputChange}
						onKeyDown={handleAddTag}
						className='size-full min-w-24 shrink snap-end border-none  outline-none'
					/>
				</>
			);
			break;
	}

	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<p className={`${inputClassNames.label}`}>
				{type} {type === '제목' && <span className='text-violet2'>*</span>}
			</p>
			<div className={classNames}>{inputElement}</div>
		</div>
	);
}
