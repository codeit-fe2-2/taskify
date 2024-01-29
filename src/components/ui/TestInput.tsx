import Image from 'next/image';
import React, { useState } from 'react';
import Datetime from 'react-datetime';

const inputClassNames = {
	border:
		'relative rounded-md border border-solid border-gray3 bg-white focus-within:outline-none focus-within:ring-[1px] focus-within:ring-violet2',
	// 사이즈를 결정하는 키워드
	type: {
		dropdown: 'h-12 w-[217px]',
		input: 'h-12 w-[450px]',
		textarea: 'min-h-[110px] w-[450px] sm:w-[287px]',
	},
};

type ModalInputType = 'title' | 'deadline' | 'tag';

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
		case 'title':
			inputElement = (
				<>
					<label htmlFor='title' className='text-lg font-medium'>
						제목 <span className='text-violet2'>*</span>
					</label>
					<div
						className={`${inputClassNames.type.input} ${inputClassNames.border}`}
					>
						<input
							type='text'
							name='title'
							id='title'
							placeholder='제목을 입력해주세요'
							className='flex size-full items-center gap-[10px] rounded-md px-4 py-[14px] text-base font-normal outline-none'
						/>
					</div>
				</>
			);
			break;

		case 'deadline':
			inputElement = (
				<>
					<p className='text-lg font-medium'>마감일</p>
					<div
						className={`flex ${inputClassNames.type.input} items-center gap-[10px] px-4 py-[14px] text-base font-normal ${inputClassNames.border}`}
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

		case 'tag':
			inputElement = (
				<>
					<label htmlFor='tag' className='text-lg font-medium'>
						태그
					</label>
					<div
						className={`flex ${inputClassNames.type.input} snap-x flex-row items-center gap-[10px] overflow-x-auto scroll-smooth px-2 text-base font-normal ${inputClassNames.border}`}
					>
						{
							// chip 생기면 대체할 예정
							tags.map((tag, index) => (
								<p
									key={index}
									className='inline-flex h-12 shrink-0 snap-start items-center px-1'
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
			<div>{inputElement}</div>
		</div>
	);
}

function Chip() {
	return <button className='size-9 rounded-full bg-violet2' />;
}

export { Chip, ModalInputInput };
