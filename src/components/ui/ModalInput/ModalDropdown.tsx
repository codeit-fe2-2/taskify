/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { Column } from '@/src/types/dashboard';
import { User } from '@/src/types/user';

import DotNameTagChip from '../Chips/DotNameTagChip';
import DefaultProfileImage from '../DefaultProfileImage';
import { inputClassNames } from './inputClassNames';

interface ManagerOptionsProps {
	value: string;
	image?: string;
	inputValue?: string;
	onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ManagerOptions = ({
	value,
	image,
	inputValue,
	onInputChange,
}: ManagerOptionsProps) => {
	return (
		<div className='flex items-center gap-1.5 text-black2'>
			{!value ? (
				<input
					type='text'
					placeholder='이름을 입력해주세요'
					value={inputValue}
					onChange={onInputChange}
					className='w-full text-base outline-none'
				/>
			) : (
				<>
					{image ? (
						<div
							className='size-[26px] rounded-full'
							style={{
								backgroundImage: `url(${image})`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							}}
						/>
					) : (
						<DefaultProfileImage
							nickname={value}
							classNames='size-[26px] text-base'
						/>
					)}
					<p className='text-base font-normal'>{value}</p>
				</>
			)}
		</div>
	);
};

const TagOptions = (value: string) => {
	return (
		<div className='flex items-center gap-1.5 text-black2'>
			<DotNameTagChip>{value.value}</DotNameTagChip>
		</div>
	);
};

interface ModalDropdownProps<T extends User | Column> {
	label: string;
	data: T[];
	currentData?: T;
	onDropdownSelect: (dataId: number) => void;
}

export default function ModalDropdown<T extends User | Column>({
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
		<div className='relative inline-flex flex-col items-start gap-2.5 text-black2'>
			<p className={`${inputClassNames.label}`}>{label}</p>
			<div
				className={`${inputClassNames.type.dropdown} ${inputClassNames.container}`}
			>
				<button
					onClick={handleOpen}
					className='relative flex size-full items-center gap-[10px] rounded-md bg-white p-4 text-base font-normal outline-none focus:z-20'
				>
					{label === '담당자' ? (
						<ManagerOptions
							value={selectedValue?.nickname}
							image={selectedValue?.profileImageUrl}
							onInputChange={handleInputChange}
						/>
					) : (
						<TagOptions value={selectedValue?.title} />
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
									onClick={() => {
										setSelectedValue(option);
										onDropdownSelect(
											label === '담당자' ? option.userId : option.id,
										);
										handleClose();
									}}
									className='flex w-full flex-row items-center gap-1.5 px-2 py-[13px] text-base hover:bg-gray2'
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
										<ManagerOptions
											value={option.nickname}
											image={option.profileImageUrl}
										/>
									) : (
										// 담당자가 아니라면
										<TagOptions value={option.title} />
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
