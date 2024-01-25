import React from 'react';

function ModalProgressInput() {
	return (
		<div className='flex flex-col items-start gap-2.5'>
			<label htmlFor='manager' className='text-lg font-medium'>
				상태
			</label>
			<select name='progress' id='progress' />
		</div>
	);
}

function ModalManagerInput() {
	return (
		<div className='flex flex-col items-start gap-2.5'>
			<label htmlFor='manager' className='text-lg font-medium'>
				담당자
			</label>
			<input
				type='text'
				name='manager'
				id='manager'
				placeholder='이름을 입력해주세요'
				className='flex items-center h-12 gap-[10px] p-4 bg-white border-[1px] border-solid rounded-md w-[217px] border-gray3 text-base font-normal'
			/>
		</div>
	);
}

function ModalCommentInput() {
	return <div></div>;
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
				className='flex w-[450px] h-12 py-[14px] px-4 items-center gap-[10px] text-base font-normal border-gray3 bg-white border-solid border-[1px] rounded-md'
			/>
		</div>
	);
}

export { ModalProgressInput, ModalManagerInput, ModalTitleInput };
