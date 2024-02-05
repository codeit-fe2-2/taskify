import AddButton from '../AddButton';
import ColorDotButtons from '../ColorDotButtons';
import ColorTagChips from './ColorTagChip';
import CountNumber from './CountNumberChip';
import DotTags from './DotNameTagChip';

export enum Size {
	Xsmall = 6,
	Small = 8,
	Medium = 14.5,
	Large = 16,
}

function Chips() {
	const handleSelectColor = (selectedColor: string) => {
		console.log('selectedColor', selectedColor);
	};

	return (
		<div>
			<CountNumber>3</CountNumber>

			<AddButton size={Size.Medium} />
			<AddButton size={Size.Large} />

			<br />
			<DotTags>To do</DotTags>
			<DotTags>On Progress</DotTags>
			<DotTags>Done</DotTags>

			<br />

			{/* 컬러 태그 */}

			<div className='flex gap-4'>
				{/* sm */}

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
