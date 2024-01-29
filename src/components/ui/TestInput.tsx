import Image from 'next/image';
import React, { useState } from 'react';
import Datetime from 'react-datetime';

const inputClassNames = {
	border:
		'relative rounded-md border border-solid border-gray3 bg-white focus-within:outline-none focus-within:ring-[1px] focus-within:ring-violet2',
	label: 'text-lg font-medium',
	// 사이즈를 결정하는 키워드
	inputType: {
		dropdown: 'h-12 w-[217px]',
		input: 'h-12 w-[450px]',
		textarea: 'min-h-[110px] w-[450px] sm:w-[287px]',
	},
};

type ModalInputType = '제목' | '마감일' | '태그';

interface ModalInputInputProps {
	type: ModalInputType;
}

function ModalInputInput({ type }: ModalInputInputProps): JSX.Element {
	let inputElement;

	const deadlineInputProps = {
		placeholder: '날짜를 입력해주세요',
		className: 'size-full outline-none rounded-md',
	};

	const [tags, setTags] = useState<string[]>([]); // chip 생기면 대체할 예정
	const [tagInput, setTagInput] = useState<string>('');

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
					<div
						className={`flex items-center gap-[10px] px-4 py-[14px] text-base font-normal ${inputClassNames.inputType.input} ${inputClassNames.border}`}
					>
						<input
							type='text'
							name='title'
							id='title'
							placeholder='제목을 입력해주세요'
							className='size-full rounded-md outline-none'
						/>
					</div>
				</>
			);
			break;

		case '마감일':
			inputElement = (
				<>
					<div
						className={`flex items-center gap-[10px] px-4 py-[14px] text-base font-normal ${inputClassNames.inputType.input} ${inputClassNames.border}`}
					>
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
					</div>
				</>
			);
			break;

		case '태그':
			inputElement = (
				<>
					{/* flex items-center gap-[10px] px-4 py-[14px] text-base font-normal */}
					{/* snap-x flex-row overflow-x-auto scroll-smooth */}
					<div
						className={`flex snap-x scroll-pl-4 flex-row items-center gap-[10px] overflow-x-auto scroll-smooth px-4 text-base font-normal scrollbar-hide ${inputClassNames.inputType.input} ${inputClassNames.border}`}
					>
						{
							// chip 생기면 대체할 예정
							tags.map((tag, index) => (
								<p
									key={index}
									className='inline-flex h-12 shrink-0 snap-start items-center'
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
							className='size-full min-w-24 shrink-0 snap-end border-none py-[14px] outline-none'
						/>
					</div>
				</>
			);
			break;
	}

	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<p className={`${inputClassNames.label}`}>
				{type} {type === '제목' && <span className='text-violet2'>*</span>}
			</p>
			<div>{inputElement}</div>
		</div>
	);
}

export { ModalInputInput };
