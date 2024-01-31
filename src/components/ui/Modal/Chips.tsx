import React from 'react';
import Image from 'next/image';
import AddButton from './Chips/AddButton';
import ColorDots from './Chips/ColorDots';
import ColorTags from './Chips/ColorTags';
import CountNumber from './Chips/CountNumber';
import DotTags from './Chips/DotTags';

function Chips() {
	enum Size {
		Xsmall = 6,
		Small = 8,
		Medium = 14.5,
		Large = 16,
	}

	return (
		<div>
			<CountNumber>3</CountNumber>

			<AddButton size={Size.Small} />
			<AddButton size={Size.Medium} />

			<br />
			<DotTags width={6} height={6}>
				To do
			</DotTags>
			<DotTags width={6} height={6}>
				On Progress
			</DotTags>
			<DotTags width={6} height={6}>
				Done
			</DotTags>
			<DotTags width={8} height={8}>
				To do
			</DotTags>
			<DotTags width={8} height={8}>
				On Progress
			</DotTags>
			<DotTags width={8} height={8}>
				Done
			</DotTags>
			<br />

			{/* 컬러 태그 */}

			<div className='flex gap-4'>
				{/* sm */}
				<ColorTags
					textColor='text-sortTextOrange'
					bgColor='bg-sortTextBgOrange'
					fontSize='10'
				>
					프젝젝트
				</ColorTags>

				<ColorTags
					textColor='text-sortTextGreen'
					bgColor='bg-sortTextBgGreen'
					fontSize='10'
				>
					일반
				</ColorTags>

				<ColorTags
					textColor='text-sortTextPink'
					bgColor='bg-sortTextBgPink'
					fontSize='10'
				>
					백엔드
				</ColorTags>

				<ColorTags
					textColor='text-sortTextBlue'
					bgColor='bg-sortTextBgBlue'
					fontSize='10'
				>
					상
				</ColorTags>

				{/* md */}
				<ColorTags
					textColor='text-sortTextOrange'
					bgColor='bg-sortTextBgOrange'
					fontSize='12'
				>
					프로젝트
				</ColorTags>

				<ColorTags
					textColor='text-sortTextGreen'
					bgColor='bg-sortTextBgGreen'
					fontSize='12'
				>
					일반
				</ColorTags>

				<ColorTags
					textColor='text-sortTextPink'
					bgColor='bg-sortTextBgPink'
					fontSize='12'
				>
					백엔드
				</ColorTags>

				<ColorTags
					textColor='text-sortTextBlue'
					bgColor='bg-sortTextBgBlue'
					fontSize='12'
				>
					상
				</ColorTags>
			</div>

			{/* 색깔 칩 */}

			<br />

			<div className='flex gap-2'>
				<ColorDots width='x-6' height='h-6' bgColor='bg-purple' />
				<ColorDots width='x-6' height='h-6' bgColor='bg-green' />
				<ColorDots width='x-6' height='h-6' bgColor='bg-purple' />
			</div>
		</div>
	);
}

export default Chips;
