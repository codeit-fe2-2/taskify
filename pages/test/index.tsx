import React from 'react';

import IconButton from '@/src/components/ui/Button/IconButton';

import {
	ModalCommentInput,
	ModalDeadlineInput,
	ModalImageInput,
	ModalManagerInput,
	ModalProgressInput,
	ModalTagInput,
	ModalTitleInput,
} from '@/src/components/ui/ModalInput';

import Chips from '@/src/components/ui/Chips/Chips';

export default function Page() {
	return (
		<>
			<ModalProgressInput />
			<ModalManagerInput />
			<ModalCommentInput />
			<ModalTitleInput />
			<ModalDeadlineInput />
			<ModalTagInput />
			<ModalImageInput />
			<Chips />
		</>
	);
}
