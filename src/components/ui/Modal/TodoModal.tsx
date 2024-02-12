import { useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import TextButton from '@/src/components/ui/Button/TextButton';
import ModalDropdown from '@/src/components/ui/ModalInput/ModalDropdown';
import ModalImage from '@/src/components/ui/ModalInput/ModalImage';
import ModalInput from '@/src/components/ui/ModalInput/ModalInput';
import ModalTextarea from '@/src/components/ui/ModalInput/ModalTextarea';
import { useGetColumnList } from '@/src/hooks/dashboard/useGetColumnList';
import { useGetMembers } from '@/src/hooks/table/useGetMembers';

interface TodoModalProps {
	onClose: () => void;
	mode: string;
	postData: PostData;
	onCreated: () => void;
}

interface PostData {
	assigneeUserId: number;
	dashboardId: number;
	columnId: number;
	title: string;
	description: string;
	dueDate: string;
	tags: string[];
	imageUrl: string;
}

const TodoModal: React.FC<TodoModalProps> = ({
	onClose,
	mode,
	postData,
	onCreated,
}) => {
	const [formData, setFormData] = useState<PostData>({
		assigneeUserId: postData.assigneeUserId,
		dashboardId: postData.dashboardId,
		columnId: postData.columnId,
		title: postData.title || '',
		description: postData.description || '',
		dueDate: postData.dueDate || '',
		tags: postData.tags || [],
		imageUrl: postData.imageUrl || '',
	});

	const memberOptions = useGetMembers(1, 99).membersInfo?.members || [];
	const columnsOptions = useGetColumnList().data || [];

	const handleChangeTitle = (value: string[]) => {
		setFormData((prevFormData) => ({ ...prevFormData, title: value[0] }));
	};

	const handleChangeDescription = (value: string) => {
		setFormData((prevFormData) => ({ ...prevFormData, description: value }));
	};

	const handleChangeDueDate = (value: string[]) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			dueDate: value[0].replaceAll('.', '-'),
		}));
	};

	const handleChangeTags = (value: string[]) => {
		setFormData((prevFormData) => ({ ...prevFormData, tags: value }));
	};

	const handleChangeImageUrl = (value: string | null) => {
		setFormData((prevFormData) => ({ ...prevFormData, imageUrl: value }));
	};

	const handleChangeColumn = (value: number) => {
		setFormData((prevFormData) => ({ ...prevFormData, columnId: value }));
	};

	const handleChangeAssignee = (value: number) => {
		setFormData((prevFormData) => ({ ...prevFormData, assigneeUserId: value }));
	};

	const uploadImageAndGetUrl = async (imageFile: string) => {
		const imageFormData = new FormData();
		imageFormData.append('image', imageFile);

		const response = await axiosInstance.post<{ imageUrl: string }>(
			`columns/${postData.columnId}/card-image`,
			imageFormData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);
		return response.data.imageUrl;
	};

	const handleSubmit = async () => {
		try {
			let sendFormData;

			if (formData.imageUrl) {
				const imageUrl = await uploadImageAndGetUrl(formData.imageUrl);
				sendFormData = { ...formData, imageUrl: imageUrl };
			} else {
				sendFormData = (({ imageUrl, ...rest }) => rest)(formData);
			}

			const response = await axiosInstance.post('cards', sendFormData);
			console.log(response.data); // handle success
			alert('할 일을 생성했습니다.');
			onClose();
			onCreated();
		} catch (error) {
			console.error('Error occurred:', error); // handle error
		}
	};

	return (
		<div className='flex w-[506px] flex-col gap-8 rounded-lg bg-white p-7'>
			<div className='text-xl font-medium'>
				{mode === '수정' ? '할 일 수정' : '할 일 생성'}
			</div>

			<div className='flex flex-col gap-8'>
				{mode === '생성' && (
					<ModalDropdown
						label='담당자'
						data={memberOptions}
						onDropdownSelect={handleChangeAssignee}
					/>
				)}

				{/* mode가 '수정'일 때도 보이도록 */}
				{mode === '수정' && (
					<div className='flex flex-row items-center gap-2.5'>
						<ModalDropdown
							label='상태'
							data={columnsOptions}
							onDropdownSelect={handleChangeColumn}
						/>
						<ModalDropdown
							label='담당자'
							data={memberOptions}
							onDropdownSelect={handleChangeAssignee}
						/>
					</div>
				)}

				<ModalInput
					label='제목'
					required={true}
					onValueChange={handleChangeTitle}
				/>

				<ModalTextarea
					label='설명'
					required={true}
					isButton={false}
					onTextChange={handleChangeDescription}
				/>

				<ModalInput label='마감일' onValueChange={handleChangeDueDate} />
				<ModalInput label='태그' onValueChange={handleChangeTags} />
				<ModalImage label='이미지' onImageSelect={handleChangeImageUrl} />
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
