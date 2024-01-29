import Image from 'next/image';
import React, { useState } from 'react';

import { inputClassNames } from './inputClassNames';

type ModalDropdownType = '상태' | '담당자';

interface ModalDropdownProps {
	label: ModalDropdownType;
}

export default function ModalDropdown({
	label: type,
}: ModalDropdownProps): JSX.Element {
	let dropdownElement;
	// chip 생기면 대대적으로 수정 예정... 임시로 string으로 대체
	const progressOptions: string[] = ['To Do', 'On Progress', 'Done'];
	const [open, setOpen] = useState<boolean>(false);
	const [options, setOptions] = useState<string[]>(
		type === '상태' ? progressOptions : [],
	);
	const [currentOption, setCurrentOption] = useState<string>(options[0] || '');

	const handleFocus = () => {
		if (options.length > 0) {
			setOpen(!open);
		}
	};

	const handleManagerInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setCurrentOption(event.target.value);
	};

	const handleAddManager = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if (
				currentOption.trim() !== '' &&
				!options.includes(currentOption.trim())
			) {
				setOptions([...options, currentOption.trim()]);
			}
		}
	};

	const handleOption = (option: string) => {
		setCurrentOption(option);
		setOpen(false);
	};

	switch (type) {
		case '상태':
			dropdownElement = (
				<>
					<button
						onClick={handleFocus}
						className='size-full rounded-md focus:z-20'
					>
						<p>{currentOption}</p>
						<Image
							src='/icons/arrow_drop_down.svg'
							width={26}
							height={26}
							alt='Progress Dropdown'
							className='absolute right-4 top-3'
						/>
					</button>
				</>
			);
			break;
		case '담당자':
			dropdownElement = (
				<>
					<input
						type='text'
						name='manager'
						id='manager'
						placeholder='이름을 입력해주세요'
						value={currentOption}
						onChange={handleManagerInputChange}
						onKeyDown={handleAddManager}
						className='flex size-full items-center gap-[10px] rounded-md p-4 text-base font-normal outline-none'
					/>
					<button className='absolute right-4 top-3' onClick={handleFocus}>
						<Image
							src='/icons/arrow_drop_down.svg'
							width={26}
							height={26}
							alt='Manager Dropdown'
						/>
					</button>
				</>
			);
			break;
	}
	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<p className={`${inputClassNames.label}`}>{type}</p>
			<div
				className={`${inputClassNames.type.dropdown} ${inputClassNames.container}`}
			>
				{dropdownElement}
				{open && (
					<ul className={`${inputClassNames.dropdownOptions}`}>
						{options.map((option, index) => (
							<li key={index}>
								<button
									className='flex w-full flex-row gap-1.5 px-2 py-[13px]'
									onClick={() => handleOption(option)}
								>
									{currentOption === option ? (
										<Image
											src='/icons/check.svg'
											width={22}
											height={22}
											alt={`${option} Checked`}
										/>
									) : (
										<div className='w-[22px]' />
									)}
									<p>{option}</p>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
