import { useState } from 'react';

import AddButton from '../AddButton';
import ColorDotButtons from '../ColorDotButtons';
import ColorTagChips from './ColorTagChip';
import CountNumber from './CountNumberChip';
import DotTags from './DotNameTagChip';

function Chips() {
	const [dashboardAdded, setDashboardAdded] = useState(false);
	const handleSelectColor = (selectedColor: string) => {
		console.log('selectedColor', selectedColor);
	};

	return (
		<div>
			<CountNumber
				initialValue={0}
				dashboardAdded={dashboardAdded}
			></CountNumber>

			<AddButton
				handleCreateNew={() => {
					console.log('clicked');
				}}
			/>

			<br />
			<DotTags>To do</DotTags>
			<DotTags>On Progress</DotTags>
			<DotTags>Done</DotTags>

			<br />

			<div className='flex gap-4'>
				<ColorTagChips>프로젝트</ColorTagChips>

				<ColorTagChips>일반</ColorTagChips>

				<ColorTagChips>백엔드</ColorTagChips>

				<ColorTagChips>상</ColorTagChips>
				<ColorTagChips>프론트엔드</ColorTagChips>
			</div>

			<br />

			<div className='flex gap-2'>
				<ColorDotButtons onSelectedColor={handleSelectColor} />
			</div>
		</div>
	);
}

export default Chips;
