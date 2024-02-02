import AddButton from '../AddButton';
import ColorDotButtons from '../ColorDotButton';
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
				<ColorTagChips fontSize='10'>프로젝트</ColorTagChips>

				<ColorTagChips fontSize='10'>일반</ColorTagChips>

				<ColorTagChips fontSize='10'>백엔드</ColorTagChips>

				<ColorTagChips fontSize='10'>상</ColorTagChips>

				{/* md */}
				<ColorTagChips fontSize='12'>프로젝트</ColorTagChips>

				<ColorTagChips fontSize='12'>일반</ColorTagChips>

				<ColorTagChips fontSize='12'>백엔드</ColorTagChips>

				<ColorTagChips fontSize='12'>상</ColorTagChips>
				<ColorTagChips fontSize='12'>프론트엔드</ColorTagChips>
			</div>

			{/* 색깔 칩 버튼 */}

			<br />

			<div className='flex gap-2'>
				<ColorDotButtons height='h-8' width='w-8' bgColor='bg-green' />
				<ColorDotButtons height='h-8' width='w-8' bgColor='bg-orange' />
				<ColorDotButtons height='h-8' width='w-8' bgColor='bg-pink' />
				<ColorDotButtons height='h-6' width='w-6' bgColor='bg-purple' />
				<ColorDotButtons height='h-6' width='w-6' bgColor='bg-blue' />
			</div>
		</div>
	);
}

export default Chips;
