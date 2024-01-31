import React from 'react';

import CopyDropdown from '@/src/components/ui/ModalInput/CopyDropdown';
import ModalImage from '@/src/components/ui/ModalInput/ModalImage';
import ModalInput from '@/src/components/ui/ModalInput/ModalInput';
import ModalTextarea from '@/src/components/ui/ModalInput/ModalTextarea';

export default function Page() {
	const columnsData = mockupData.data.map((column) => ({
		id: column.id,
		title: column.title,
	}));

	const membersData = mockupData.members.map((member) => ({
		id: member.id,
		userId: member.userId,
		nickname: member.nickname,
		profileImageUrl: member.profileImageUrl,
		isOwner: member.isOwner,
	}));

	const currentColumnId = 1;
	const currentColumn = columnsData.find(
		(column) => column.id === currentColumnId,
	);

	const [columnId, setColumnId] = useState<number | null>(currentColumnId);
	const [assigneeUserId, setAssigneeUserId] = useState<number | null>();
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [dueDate, setDueDate] = useState<string | null>();
	const [tags, setTags] = useState<string[] | null>();
	const [imageUrl, setImageUrl] = useState<string | null>();

	const createCardData = {
		assigneeUserId: assigneeUserId,
		dashboardId: 0,
		columnId: columnId,
		title: title,
		description: description,
		dueDate: dueDate,
		tags: tags,
		imageUrl: imageUrl,
	};

	const editCardData = {
		columnId: columnId,
		assigneeUserId: assigneeUserId,
		title: title,
		description: description,
		dueDate: dueDate,
		tags: tags,
		imageUrl: imageUrl,
	};

	const handleColumnId = (value: number | null) => {
		setColumnId(value);
	};

	const handleAssigneeUserId = (value: number | null) => {
		setAssigneeUserId(value);
	};

	const handleTitle = (value: string[]) => {
		setTitle(value[0]);
	};

	const handleDescription = (value: string) => {
		setDescription(value);
	};

	const handleDueDate = (value: string[] | null) => {
		if (value) {
			setDueDate(value[0]);
		} else {
			setDueDate(null);
		}
	};

	const handleTags = (value: string[] | null) => {
		setTags(value);
	};

	const handleImageUrl = (value: string | null) => {
		setImageUrl(value);
	};

	const handleCreateCard = () => {
		console.log(createCardData);
	};

	const handleEditCard = () => {
		console.log(editCardData);
	};

	return (
		<div className='flex flex-col gap-y-3 p-3'>
			<div className='flex flex-row gap-x-3'>
				<CopyDropdown
					label='상태'
					data={columnsData}
					currentData={currentColumn}
					onDropdownSelect={handleColumnId}
				/>
				<CopyDropdown
					label='담당자'
					data={membersData}
					onDropdownSelect={handleAssigneeUserId}
				/>
			</div>
			<ModalInput label='제목' required onValueChange={handleTitle} />
			<ModalTextarea
				label='설명'
				required={true}
				isButton={false}
				onTextChange={handleDescription}
			/>
			<ModalInput label='마감일' onValueChange={handleDueDate} />
			<ModalInput label='태그' onValueChange={handleTags} />
			<ModalImage label='이미지' onImageSelect={handleImageUrl} />
			<button onClick={handleCreateCard}>createCardData</button>
			<button onClick={handleEditCard}>editCardData</button>
		</div>
	);
}
