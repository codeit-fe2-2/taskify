import Image from 'next/image';
import { useState } from 'react';

import { inputClassNames } from './inputClassNames';

interface ModalDropdownProps {
	label: string;
	options: string[]; // id와 name 모두를 받도록 설정해야 함...?
	currentOption: string;
	onValuesChange: (newValues: string[]) => void;
}

export default function ModalDropdown({
	label: type,
	options,
	currentOption,
	onValuesChange,
}: ModalDropdownProps): JSX.Element {
	// chip 생기면 대대적으로 수정 예정... 임시로 string으로 대체

	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>(currentOption);

	const handleFocus = () => {
		if (options.length > 0) {
			setOpen(!open);
		}
	};

	const handleOption = (option: string) => {
		onValuesChange([option]);
		setValue(option);
		setOpen(false);
	};

	return (
		<div className='relative inline-flex flex-col items-start gap-2.5'>
			<p className={`${inputClassNames.label}`}>{type}</p>
			<div
				className={`${inputClassNames.type.dropdown} ${inputClassNames.container}`}
			>
				<button
					onClick={handleFocus}
					className='relative flex size-full items-center gap-[10px] rounded-md bg-white p-4 text-base font-normal outline-none focus:z-20'
				>
					{value ? (
						<p>{value}</p>
					) : (
						<p className='text-gray4'>이름을 입력해주세요</p>
					)}
					<Image
						src='/icons/arrow_drop_down.svg'
						width={26}
						height={26}
						alt='Progress Dropdown'
						className='absolute right-4 top-3'
					/>
				</button>
				{open && (
					<ul className={`${inputClassNames.dropdownOptions}`}>
						{options.map((option, index) => (
							<li key={index}>
								<button
									className='flex w-full flex-row gap-1.5 px-2 py-[13px]'
									onClick={() => handleOption(option)}
								>
									{value === option ? (
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
