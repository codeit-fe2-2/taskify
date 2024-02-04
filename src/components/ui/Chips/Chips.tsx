import AddButton from '../AddButton';
import ColorDotButton from '../ColorDotButton';
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
	const handleColorSelect = (selectedColor: string) => {
		console.log('selectedColor', selectedColor);
	};
	return (
		<div>
			<CountNumber>3</CountNumber>

			<AddButton size={Size.Medium} />
			<AddButton size={Size.Large} />

			<br />
			<DotTags size={Size.Xsmall}>To do</DotTags>
			<DotTags size={Size.Xsmall}>On Progress</DotTags>
			<DotTags size={Size.Xsmall}>Done</DotTags>
			<DotTags size={Size.Small}>To do</DotTags>
			<DotTags size={Size.Small}>On Progress</DotTags>
			<DotTags size={Size.Small}>Done</DotTags>
			<br />

			{/* 컬러 태그 */}

			<div className='flex gap-4'>
				{/* sm */}

				<ColorTagChips fontSize='text-10'>프로젝트</ColorTagChips>

				<ColorTagChips fontSize='text-10'>일반</ColorTagChips>

				<ColorTagChips fontSize='text-10'>백엔드</ColorTagChips>

				<ColorTagChips fontSize='text-10'>상</ColorTagChips>

				{/* md */}
				<ColorTagChips fontSize='text-12'>프로젝트</ColorTagChips>

				<ColorTagChips fontSize='text-12'>일반</ColorTagChips>

				<ColorTagChips fontSize='text-12'>백엔드</ColorTagChips>

				<ColorTagChips fontSize='text-12'>상</ColorTagChips>
				<ColorTagChips fontSize='text-12'>프론트엔드</ColorTagChips>
			</div>

			{/* 색깔 칩 버튼 */}

			<br />

			<div className='flex gap-2'>
				<ColorDotButton onSelectedColor={handleColorSelect} />
			</div>
		</div>
	);
}

export default Chips;
