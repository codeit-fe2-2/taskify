import moment from 'moment';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Datetime from 'react-datetime';

import { inputClassNames } from './inputClassNames';

type ModalInputType = '제목' | '마감일' | '태그';

interface ModalInputProps {
	label: ModalInputType;
	onValuesChange: (newValues: string[]) => void;
}

export default function ModalInput({
	label: type,
	onValuesChange,
}: ModalInputProps): JSX.Element {
	const [tagInput, setTagInput] = useState<string>('');
	const [values, setValues] = useState<string[]>([]);

	let inputElement;

	const deadlineInputProps = {
		placeholder: '날짜를 입력해주세요',
		className: 'size-full outline-none rounded-md',
	};

	const classNames = `${inputClassNames.container} ${inputClassNames.inputStyle} ${inputClassNames.type.input} ${
		type === '태그'
			? 'snap-x scroll-pl-4 flex-row overflow-x-auto scroll-smooth scrollbar-hide'
			: ''
	}`;

	const handleTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
		setValues([event.target.value]);
		onValuesChange([event.target.value]);
	};

	const handleDeadlineValue = (selectedMoment: moment.Moment | string) => {
		if (moment.isMoment(selectedMoment)) {
			// 타입이 Moment면 (날짜와 시간이면)
			onValuesChange([selectedMoment.format('YYYY.MM.DD HH:mm')]);
		} else {
			// 타입이 String이면
			setValues([selectedMoment]);
			onValuesChange([selectedMoment]);
		}
	};

	const handleTagInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTagInput(event.target.value);
	};

	const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if (tagInput.trim() !== '' && !values.includes(tagInput.trim())) {
				setValues([...values, tagInput.trim()]);
				onValuesChange([...values, tagInput.trim()]);
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
						onChange={handleTitleValue}
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
						onChange={handleDeadlineValue}
					/>
				</>
			);
			break;

		case '태그':
			inputElement = (
				<>
					{values.map((value, index) => (
						<p
							key={index}
							className='inline-flex h-full shrink-0 snap-start items-center'
						>
							{value}
						</p>
					))}
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
