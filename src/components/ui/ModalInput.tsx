import React from 'react';

function ModalManagerInput() {
	return (
		<div className='flex flex-col items-start gap-10'>
			<label htmlFor='manager' className='text-lg'>
				담당자
			</label>
			<input
				type='text'
				name='manager'
				id='manager'
				placeholder='이름을 입력해주세요'
				className='text-lg flex w-217 h-48 p-4 items-center gap-10 border-2 rounded-md bg-white border-solid border-gray3'
			/>
		</div>
	);
}

export { ModalManagerInput };
