/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { inputClassNames } from './inputClassNames';

interface ModalDropdownProps<T> {
	label: string;
	data: T[];
	currentData?: T;
	onDropdownSelect: (dataId: number) => void;
}

interface DropdownOptionsProps {
	text: string;
	image?: string;
	inputValue?: string;
	onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DropdownOptions = ({
	text,
	image,
	inputValue,
	onInputChange,
}: DropdownOptionsProps) => {
	return (
		<div className='flex items-center gap-1.5'>
			{image && (
				<div
					className='size-[26px] rounded-full'
					style={{
						backgroundImage: `url(${image})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				/>
			)}
			{!text ? (
				<input
					type='text'
					placeholder='이름을 입력해주세요'
					value={inputValue}
					onChange={onInputChange}
					className='w-full outline-none'
				/>
			) : (
				<p className='text-base font-normal text-black3'>{text}</p>
			)}
		</div>
	);
};

export default function ModalDropdown<T>({
	label,
	data,
	currentData,
	onDropdownSelect,
}: ModalDropdownProps<T>) {
	const [open, setOpen] = useState<boolean>(false);
	const [options, setOptions] = useState(data);
	const [selectedValue, setSelectedValue] = useState<T | undefined>(
		currentData,
	);

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const filteredData = data.filter((datum) =>
			datum.nickname.includes(event.target.value),
		);
		setOptions([...filteredData]);
	};

	return (
		<div className='relative inline-flex flex-col items-start gap-2.5'>
			<p className={`${inputClassNames.label}`}>{label}</p>
			<div
				className={`${inputClassNames.type.dropdown} ${inputClassNames.container}`}
			>
				<button
					onClick={handleOpen}
					className='relative flex size-full items-center gap-[10px] rounded-md bg-white p-4 text-base font-normal outline-none focus:z-20'
				>
					<DropdownOptions
						text={
							label === '담당자'
								? selectedValue?.nickname
								: selectedValue?.title
						}
						image={
							label === '담당자' ? selectedValue?.profileImageUrl : undefined
						}
						onInputChange={handleInputChange}
					/>
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
									onClick={() => {
										setSelectedValue(option);
										onDropdownSelect(option.userId ? option.userId : option.id);
										handleClose();
									}}
									className='flex w-full flex-row items-center gap-1.5 px-2 py-[13px]'
								>
									<div className='relative size-[22px]'>
										{option === selectedValue && (
											<Image
												src='/icons/check.svg'
												fill={true}
												alt={`Checked`}
											/>
										)}
									</div>

									{label === '담당자' ? (
										<DropdownOptions
											text={option.nickname}
											image={option.profileImageUrl}
										/>
									) : (
										// 담당자가 아니라면
										<DropdownOptions text={option.title} />
									)}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
