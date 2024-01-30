import Image from 'next/image';
import { useState } from 'react';

import { inputClassNames } from './inputClassNames';

interface Member {
	id: number;
	userId: number;
	nickname: string;
	profileImageUrl: string;
	isOwner: boolean;
}
interface ModalDropdownProps {
	type: string;
	options?: string[];
	currentValue: number;
	members?: Member[];
	currentMemberId?: number;
	onValuesChange: (newValues: string[]) => void;
}

export default function ModalDropdown({
	type,
	options,
	currentValue,
	members,
	onValuesChange,
}: ModalDropdownProps): JSX.Element {
	// chip 생기면 대대적으로 수정 예정... 임시로 string으로 대체

	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<number>(currentValue);

	if (!options) {
		options = members?.map((member) => member.nickname);
	}

	const handleFocus = () => {
		if (options) {
			setOpen(!open);
		}
	};

	const handleOption = (option: number) => {
		if (options) {
			onValuesChange([options[option]]);
			setValue(option);
			setOpen(false);
		}
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
					{value === -1 ? (
						<p className='text-gray4'>이름을 입력해주세요</p>
					) : (
						<p>{options && options[value]}</p>
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
						{members
							? members?.map((member, index) => (
									<li key={index}>
										<button
											className='flex w-full flex-row gap-1.5 px-2 py-[13px]'
											onClick={() => handleOption(members?.indexOf(member))}
										>
											<div className='w-[22px]'>
												{value === members?.indexOf(member) && (
													<Image
														src='/icons/check.svg'
														width={22}
														height={22}
														alt={`${member.nickname} Checked`}
													/>
												)}
											</div>
											<div
												className='size-[26px] rounded-full'
												style={{
													backgroundImage: `url(${member.profileImageUrl})`,
													backgroundPosition: 'center',
													backgroundSize: 'cover',
													backgroundRepeat: 'no-repeat',
												}}
											/>
											<p>{member.nickname}</p>
										</button>
									</li>
								))
							: options?.map((option, index) => (
									<li key={index}>
										<button
											className='flex w-full flex-row gap-1.5 px-2 py-[13px]'
											onClick={() => handleOption(options?.indexOf(option))}
										>
											{value === options?.indexOf(option) ? (
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
