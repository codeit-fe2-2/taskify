import axios from 'axios';
import React, { useState } from 'react';

import TextButton from '../Button/TextButton';
import ModalDropdown from '../ModalInput/ModalDropdown';
import ModalImage from '../ModalInput/ModalImage';
import ModalInput from '../ModalInput/ModalInput';
import ModalTextarea from '../ModalInput/ModalTextarea';

interface TodoModalProps {
	onClose: () => void;
	handleSubmit: () => void;
	mode: string;
	postData: {
		assigneeUserId: number;
		dashboardId: number;
		columnId: number;
		title: string;
		description: string;
		dueDate: string;
		tags: string[];
		imageUrl: string;
	};
}

const TodoModal: React.FC<TodoModalProps> = ({ onClose, mode, postData }) => {
	const [title, setTitle] = useState<string>(''); // 제목 상태 추가
	const [description, setDescription] = useState<string>(''); // 설명 상태 추가
	const [dueDate, setDueDate] = useState<string>(''); // 마감일 상태 추가
	const [tags, setTags] = useState<string[]>([]); // 태그 상태 추가
	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				'https://sp-taskify-api.vercel.app/2-2/card/{cardId}',
				{
					assigneeUserId: 765,
					dashboardId: 3226,
					columnId: 10771,
					title: title,
					description: description,
					dueDate: dueDate,
					tags: tags,
					imageUrl: postData.imageUrl,
				},
			);

			console.log(response.data); // handle success
		} catch (error) {
			console.error('Error occurred:', error); // handle error
		}
	};

	const handleTagValueChange = (newValues: string[]) => {
		setTags(newValues);
	};
	return (
		<div className='m-10 flex h-[907px] w-[506px] flex-col gap-[32px] rounded-lg border-[1px] bg-white p-7'>
			<div className='text-xl font-medium'>
				{mode === '수정' ? '할일수정' : '할일생성'}
			</div>

			<div className='flex-col gap-[32px]'>
				{mode === '생성' && (
					<ModalDropdown label='담당자' inputValue='inkputValue' />
				)}

				{/* mode가 '수정'일 때도 보이도록 */}
				{mode === '수정' && (
					<div className='flex items-center gap-2.5'>
						<ModalDropdown label='상태' inputValue='inputValue' />
						<ModalDropdown label='담당자' inputValue='inputValue' />
					</div>
				)}

				<ModalInput
					label='제목'
					required={true}
					onValueChange={(newValues) => setTitle(newValues[0])}
				/>

				<ModalTextarea label='설명' required={true} isButton={false} />

				<ModalInput
					label='마감일'
					onValueChange={(newValues) => setDueDate(newValues[0])}
				/>
				<ModalInput label='태그' onValueChange={handleTagValueChange} />

				<ModalImage label='이미지' />
			</div>

			<div className='mt-7 flex justify-end gap-3 sm:mt-6 sm:justify-center'>
				<TextButton
					buttonSize='md'
					textSize='md'
					color='secondary'
					onClick={onClose}
				>
					취소
				</TextButton>
				<TextButton
					buttonSize='md'
					type='submit'
					textSize='md'
					color='primary'
					onClick={handleSubmit}
				>
					{mode === '생성' ? '생성' : '수정'}
				</TextButton>
			</div>
		</div>
	);
};

export default TodoModal;
