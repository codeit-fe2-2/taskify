import React, { useState } from 'react';

import DefaultProfileImage from '@/src/components/ui/DefaultProfileImage';
import ModalDropdown from '@/src/components/ui/ModalInput/ModalDropdown';

import mockupData from './DropdownMockup.json';

export default function Page() {
	const nickname = '각별님 너무 좋아';

	const managersData = mockupData.members;
	const [selectedManagerId, setSelectedManagerId] = useState<number>();
	const columnsData = mockupData.data;
	const [selectedColumnId, setSelectedColumnId] = useState<number>();

	const handleValues = () => {
		console.log(selectedManagerId);
		console.log(selectedColumnId);
	};

	return (
		<div className='flex size-full flex-col gap-6 bg-gray2 p-1'>
			<DefaultProfileImage
				nickname={nickname}
				classNames='size-[96px] text-[16px]'
			/>
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
			<button onClick={handleValues}>버튼</button>
		</div>
	);
}
