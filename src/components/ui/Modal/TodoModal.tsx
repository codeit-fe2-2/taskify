import axios from 'axios';
import { title } from 'process';
import React, { useState } from 'react';

import usePostCardInput from '@/src/hooks/Card/usePostCardInput';
import { useGetColumnList } from '@/src/hooks/dashboard/useGetColumnList';
import { useGetMembers } from '@/src/hooks/table/useGetMembers';

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
	const titleInput = usePostCardInput(postData.title || ''); // 커스텀 훅 사용
	const descriptionInput = usePostCardInput(postData.description || ''); // 커스텀 훅 사용
	const dueDateInput = usePostCardInput(postData.dueDate || ''); // 커스텀 훅 사용
	const imageUrlInput = usePostCardInput(postData.imageUrl || ''); // 커스텀 훅 사용
	const [tags, setTags] = useState<string[]>(postData.tags || []); // 초기값 설정

	const memberOptions = useGetMembers(1, 99).membersInfo;
	const columnsOptions = useGetColumnList().data;

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				'https://sp-taskify-api.vercel.app/2-2/cards',
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
		<div className='m-10 flex w-[506px] flex-col gap-8 rounded-lg border bg-white p-7'>
			<div className='text-xl font-medium'>
				{mode === '수정' ? '할 일 수정' : '할 일 생성'}
			</div>

			<div className='flex flex-col gap-8'>
				{mode === '생성' && (
					<ModalDropdown
						label='담당자'
						inputValue='inkputValue'
						data={memberOptions}
					/>
				)}

				{/* mode가 '수정'일 때도 보이도록 */}
				{mode === '수정' && (
					<div className='flex items-center gap-2.5'>
						<ModalDropdown
							label='상태'
							inputValue='inputValue'
							data={columnsOptions}
						/>
						<ModalDropdown
							label='담당자'
							inputValue='inputValue'
							data={memberOptions}
						/>
					</div>
				)}

				<ModalInput
					label='제목'
					required={true}
					onValueChange={titleInput.onChange}
				/>

				<ModalTextarea
					label='설명'
					required={true}
					isButton={false}
					value={descriptionInput.value}
					onValueChange={descriptionInput.onChange}
				/>

				<ModalInput
					label='마감일'
					value={dueDateInput.value}
					onValueChange={dueDateInput.onChange}
				/>
				<ModalInput
					label='태그'
					value={tags}
					onValueChange={handleTagValueChange}
				/>

				<ModalImage label='이미지' onImageSelect={imageUrlInput.onChange} />
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
