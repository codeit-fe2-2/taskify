import React, { useState } from 'react';

import ColorTagChip from '@/src/components/ui/Chips/ColorTagChip';
import ModalDropdown from '@/src/components/ui/ModalInput/ModalDropdown';
import ModalInput from '@/src/components/ui/ModalInput/ModalInput';

import mockupData from './DropdownMockup.json';

export default function Page() {
	const managersData = mockupData.members;
	const [selectedManagerId, setSelectedManagerId] = useState<number>();
	const columnsData = mockupData.data;
	const [selectedColumnId, setSelectedColumnId] = useState<number>();

	const handleValues = () => {
		console.log(selectedManagerId);
		console.log(selectedColumnId);
	};

	const [currentTags, setCurrentTags] = useState<string[]>([]);

	const handleTag = () => {
		console.log('tag!');
	};

	const handleTags = () => {
		console.log(currentTags);
	};

	return (
		<div className='flex size-full flex-col gap-6 bg-gray2 p-1'>
			<ModalDropdown
				label='담당자'
				data={managersData}
				onDropdownSelect={(managerId) => setSelectedManagerId(managerId)}
			/>
			<ModalDropdown
				label='담당자'
				data={managersData}
				currentData={managersData[0]}
				onDropdownSelect={(managerId) => setSelectedManagerId(managerId)}
			/>
			<ModalDropdown
				label='상태'
				data={columnsData}
				currentData={columnsData[0]}
				onDropdownSelect={(columnId) => setSelectedColumnId(columnId)}
			/>
			<button onClick={handleValues}>드롭다운 버튼</button>
			<ColorTagChip onTagClick={handleTag}>각별님영상올려</ColorTagChip>
			<ModalInput
				label='태그'
				onValueChange={(newValues) => setCurrentTags(newValues)}
			/>
			<button onClick={handleTags}>태그 버튼</button>
		</div>
	);
}
