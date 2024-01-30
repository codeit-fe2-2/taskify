import React from 'react';
import Image from 'next/image';

function CountNumber({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element {
	return (
		<div>
			<div className='flex justify-center align-middle w-6 bg-gray2 gap-10 rounded-md text-gray5'>
				{children}
			</div>
		</div>
	);
}

function ColorTags({
	children,
	textColor,
	bgColor,
	fontSize,
}: {
	children: React.ReactNode;
	textColor: string;
	bgColor: string;
	fontSize: string;
}): React.JSX.Element {
	return (
		<div>
			<button
				className={`${textColor} ${bgColor} ${fontSize <= '10' ? 'text-xs' : 'text-base'} px-3 py-2 rounded-lg text-xs`}
			>
				{children}
			</button>
		</div>
	);
}

enum DotSize {
	Small = 28,
	Medium = 30,
}

export function ColorDots({
	src,
	tagName,
	width,
	height,
}: {
	src: string;
	tagName: string;
	width: DotSize;
	height: DotSize;
}): React.JSX.Element {
	return (
		<div>
			<button>
				<Image src={src} width={width} height={height} alt={tagName} />
			</button>
		</div>
	);
}

enum Size {
	Small = 14.5,
	Medium = 16,
}

function AddButton({ size }: { size: Size }): React.JSX.Element {
	return (
		<div>
			<br />

			<button className='flex bg-violet1 p-1 rounded-md'>
				<Image
					src='/icons/chip_add_sm.svg'
					width={size}
					height={size}
					alt='chip add'
				/>
			</button>
		</div>
	);
}

function DotTags({
	children,
	width,
	height,
}: {
	children: React.ReactNode;
	width: number;
	height: number;
}): React.JSX.Element {
	return (
		<div>
			<button className='flex items-center align-middle bg-violet1 rounded-2xl px-2 py-2 gap-2 '>
				<Image
					src='/icons/chip_ellipse_sm_purple.svg'
					width={width}
					height={height}
					alt='chip dot purple'
				/>
				<div className='text-violet2'>{children}</div>
			</button>
		</div>
	);
}

function Chips() {
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
				{/* sm */}
				<ColorDots
					tagName='green'
					src='/icons/chips_ellipse_green.svg'
					width={DotSize.Small}
					height={DotSize.Small}
				/>

				<ColorDots
					tagName='purple'
					src='/icons/chips_ellipse_purple.svg'
					width={DotSize.Small}
					height={DotSize.Small}
				/>
				<ColorDots
					tagName='orange'
					src='/icons/chips_ellipse_orange.svg'
					width={DotSize.Small}
					height={DotSize.Small}
				/>
				<ColorDots
					tagName='blue'
					src='/icons/chips_ellipse_blue.svg'
					width={DotSize.Small}
					height={DotSize.Small}
				/>
				<ColorDots
					tagName='pink'
					src='/icons/chips_ellipse_pink.svg'
					width={DotSize.Small}
					height={DotSize.Small}
				/>
				{/* md */}
				<ColorDots
					tagName='green'
					src='/icons/chips_ellipse_green.svg'
					width={DotSize.Medium}
					height={DotSize.Medium}
				/>
				<ColorDots
					tagName='purple'
					src='/icons/chips_ellipse_purple.svg'
					width={DotSize.Medium}
					height={DotSize.Medium}
				/>
				<ColorDots
					tagName='orange'
					src='/icons/chips_ellipse_orange.svg'
					width={DotSize.Medium}
					height={DotSize.Medium}
				/>
				<ColorDots
					tagName='blue'
					src='/icons/chips_ellipse_blue.svg'
					width={DotSize.Medium}
					height={DotSize.Medium}
				/>
				<ColorDots
					tagName='pink'
					src='/icons/chips_ellipse_pink.svg'
					width={DotSize.Medium}
					height={DotSize.Medium}
				/>
			</div>
			<div className='rounded-full bg-purple w-6 y-6'></div>
		</div>
	);
}

export default Chips;
