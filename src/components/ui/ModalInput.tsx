import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';

function ModalProgressInput() {
	const [open, setOpen] = useState(false);
	// chip 생기면 대대적으로 수정 예정... 임시로 string으로 대체
	const progressOptions = ['To Do', 'On Progress', 'Done'];
	const [progress, setProgress] = useState(progressOptions[0]);

	const handleFocus = () => {
		setOpen(true);
	};

	// const handleBlur = () => {
	// 	setOpen(false);
	// };

	const handleProgress = (progressOption: string) => {
		setProgress(progressOption);
		setOpen(false);
	};

	return (
		<div className='flex flex-col items-start gap-2.5 '>
			<label htmlFor='progress' className='text-lg font-medium'>
				상태
			</label>
			<div>
				<button
					className='relative h-12 w-[217px] rounded-md border-[1px] border-solid border-gray3 bg-white focus:z-20 focus:outline-none focus:ring-[1px] focus:ring-violet2'
					onFocus={handleFocus}
					// onBlur={handleBlur} <- 이거 넣으면 li 클릭하는 것보다 onBlur가 먼저 동작해서 handleProgress가 동작 안 함... ㅠㅠ
				>
					<p>{progress}</p>
					<Image
						src='/icons/arrow_drop_down.svg'
						width={26}
						height={26}
						alt='Progress Dropdown'
						className='absolute right-4 top-3'
					/>
				</button>
				{open && (
					<ul className='absolute z-10 mt-0.5 flex w-[217px] flex-col rounded-md border-[1px] border-solid border-gray3 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.8)]'>
						{progressOptions.map((progressOption, index) => (
							<li key={index}>
								<button
									className='flex w-full flex-row gap-1.5 px-2 py-[13px]'
									onClick={() => handleProgress(progressOption)}
								>
									{progress === progressOption ? (
										<Image
											src='/icons/check.svg'
											width={22}
											height={22}
											alt={`${progressOption} Checked`}
										/>
									) : (
										<div className='w-[22px]' />
									)}
									<p>{progressOption}</p>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

function ModalManagerInput() {
	const [managerOptions, setManagerOptions] = useState<string[]>([]);
	const [managerInput, setManagerInput] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);
	// const [manager, setManager] = useState<string>('');

	const handleManagerInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setManagerInput(event.target.value);
	};

	const handleAddManager = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if (
				managerInput.trim() !== '' &&
				!managerOptions.includes(managerInput.trim())
			) {
				setManagerOptions([...managerOptions, managerInput.trim()]);
			}
		}
	};

	const handleOpen = () => {
		if (managerOptions.length > 0) {
			setOpen(!open);
		}
	};

	const handleManager = (managerOption: string) => {
		setManagerInput(managerOption);
		// setManager(managerOption);
		setOpen(false);
	};

	return (
		<div className='flex flex-col items-start gap-2.5'>
			<label htmlFor='manager' className='text-lg font-medium'>
				담당자
			</label>
			<div className='relative'>
				<input
					type='text'
					name='manager'
					id='manager'
					placeholder='이름을 입력해주세요'
					value={managerInput}
					onChange={handleManagerInputChange}
					onKeyDown={handleAddManager}
					className='flex h-12 w-[217px] items-center gap-[10px] rounded-md border-[1px] border-solid border-gray3 bg-white p-4 text-base font-normal focus:outline-none focus:ring-[1px] focus:ring-violet2'
				/>
				<button className='absolute right-4 top-3' onClick={handleOpen}>
					<Image
						src='/icons/arrow_drop_down.svg'
						width={26}
						height={26}
						alt='Progress Dropdown'
					/>
				</button>
				{open && (
					<ul className='absolute z-10 mt-0.5 flex w-[217px] flex-col rounded-md border-[1px] border-solid border-gray3 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.8)]'>
						{managerOptions.map((managerOption, index) => (
							<li key={index}>
								<button
									className='flex w-full flex-row gap-1.5 px-2 py-[13px]'
									onClick={() => handleManager(managerOption)}
								>
									<p>{managerOption}</p>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

function ModalCommentInput() {
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
				댓글
			</label>
			<div className='relative flex min-h-[110px] w-[450px] flex-col items-start gap-[10px] rounded-md border-[1px] border-solid border-gray3 bg-white p-4 text-base font-normal focus-within:outline-none focus-within:ring-[1px]  focus-within:ring-violet2'>
				<textarea
					ref={textareaRef}
					name='comment'
					id='comment'
					placeholder='댓글 작성하기'
					onChange={handleTextareaChange}
					className='size-full resize-none border-none outline-none'
				/>
				{/* 차후 button 컴포넌트 삽입 예정(크기만 맞춘 임시 버튼) */}
				<button className='absolute bottom-3 right-3 flex h-8 w-[83px] shrink-0 items-center justify-center gap-2.5 border-[1px] border-solid border-gray3 px-[31px] py-[9px]' />
			</div>
		</div>
	);
}

function ModalTitleInput() {
	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<label htmlFor='title' className='text-lg font-medium'>
				제목 <span className='text-violet2'>*</span>
			</label>
			<input
				type='text'
				name='title'
				id='title'
				placeholder='제목을 입력해주세요'
				className='flex h-12 w-[450px] items-center gap-[10px] rounded-md border-[1px] border-solid border-gray3 bg-white px-4 py-[14px] text-base font-normal focus:outline-none focus:ring-[1px] focus:ring-violet2'
			/>
		</div>
	);
}

function ModalDeadlineInput() {
	const [deadline, setDeadline] = useState('');

	const handleFileInputClick = () => {
		const dateTimeInput = document.getElementById(
			'datetimeInput',
		) as HTMLInputElement;
		dateTimeInput.click();
	};

	const handleDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedDate = e.target.value;
		setDeadline(selectedDate);
	};

	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<label htmlFor='deadline' className='text-lg font-medium'>
				마감일
			</label>
			<div className='flex h-12 w-[450px] items-center gap-[10px] rounded-md border-[1px] border-solid border-gray3 bg-white px-4 py-[14px] text-base font-normal focus-within:outline-none focus-within:ring-[1px] focus-within:ring-violet2'>
				<Image
					src='/icons/calendar.svg'
					width={20}
					height={20}
					alt='Deadline'
				/>
				<button
					onClick={handleFileInputClick}
					className='grow text-left text-base font-normal not-italic text-gray4'
				>
					날짜를 입력해주세요 : {deadline}
				</button>
				<input
					id='datetimeInput'
					type='datetime-local'
					onChange={handleDeadlineChange}
					// className='hidden'
				/>
			</div>
		</div>
	);
}

function ModalTagInput() {
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

	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<label htmlFor='tag' className='text-lg font-medium'>
				태그
			</label>
			<div className='flex w-[450px] snap-x flex-row items-center gap-[10px] overflow-x-auto scroll-smooth rounded-md border-[1px] border-solid border-gray3 bg-white px-2 text-base font-normal focus-within:outline-none focus-within:ring-[1px] focus-within:ring-violet2'>
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
					className='h-12 w-full min-w-24 shrink-0 snap-end border-none py-[14px] outline-none'
				/>
			</div>
		</div>
	);
}

function ModalImageInput() {
	const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

	const handleFileInputClick = () => {
		const fileInput = document.getElementById('fileInput') as HTMLInputElement;
		fileInput.click();
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];

		if (selectedFile) {
			const reader = new FileReader();

			reader.onload = (event) => {
				const imageSrc = event.target?.result as string;
				setBackgroundImage(imageSrc);
			};

			reader.readAsDataURL(selectedFile);
		}
	};

	return (
		<button
			onClick={handleFileInputClick}
			className='group relative flex size-[76px] shrink-0 items-center justify-center rounded-md bg-white'
		>
			{backgroundImage ? (
				<>
					<Image
						src={backgroundImage}
						fill={true}
						alt='test Image'
						className='rounded-md'
					/>
					<div className='z-10 flex size-[76px] items-center justify-center rounded-md bg-black4 opacity-0 group-hover:opacity-60'>
						<Image
							src='/icons/edit.svg'
							width={30}
							height={30}
							alt='Edit Image'
						/>
					</div>
				</>
			) : (
				<div className='rounded-md bg-gray3 p-6'>
					<div className='size-[28px] bg-violet2' />
				</div>
			)}
			<input
				type='file'
				id='fileInput'
				className='hidden'
				onChange={handleFileChange}
			/>
		</button>
	);
}

export {
	ModalCommentInput,
	ModalDeadlineInput,
	ModalImageInput,
	ModalManagerInput,
	ModalProgressInput,
	ModalTagInput,
	ModalTitleInput,
};
