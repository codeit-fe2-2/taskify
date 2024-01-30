import React from 'react';

import DashBoardButton from '@/src/components/ui/Button/DashBoardButton';
import IconButton from '@/src/components/ui/Button/IconButton';
import GeneralButton from '@/src/components/ui/Button/TextButton';

export default function Page() {
	const handleLoginClick = () => {
		console.log('테슷흐입니다.');
	};
	const handleLoginClick = () => {
		console.log('테슷흐입니다.');
	};
	const dashboards = [
		{
			id: 0,
			title: '비브리지',
			color: 'orange',
			createdAt: '2024-01-30T09:20:29.789Z',
			updatedAt: '2024-01-30T09:20:29.789Z',
			createdByMe: true,
			userId: 0,
		},
	];

	return (
		<>
			<ModalProgressInput />
			<ModalManagerInput />
			<ModalCommentInput />
			<ModalTitleInput />
			<ModalDeadlineInput />
			<ModalTagInput />
			<ModalImageInput />
		</>
	);
}
