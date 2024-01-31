import CopyDropdown from '@/src/components/ui/ModalInput/CopyDropdown';

import mockupData from './mockup.json';

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
	return (
		<div className='flex flex-row gap-x-3 p-3'>
			<CopyDropdown
				label='상태'
				data={columnsData}
				currentData={currentColumn}
			/>
			<CopyDropdown label='담당자' data={membersData} />
		</div>
	);
}
