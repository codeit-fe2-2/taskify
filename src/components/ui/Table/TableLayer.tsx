import Image from 'next/image';
import { ReactNode } from 'react';

import IconButton from '../Button/IconButton';
import TextButton from '../Button/TextButton';

interface TableLayerProps {
	tableName: string;
	isInvite?: boolean;
	needPage?: boolean;
	layerWidth?: 'small' | 'large';
	onPrevious?: () => void;
	onNext?: () => void;
	onInvite?: () => void;
	children: ReactNode;
}

export default function TableLayer({
	tableName,
	isInvite,
	needPage,
	layerWidth = 'small',
	onPrevious,
	onNext,
	onInvite,
	children,
}: TableLayerProps) {
	const layerWidthClass =
		layerWidth === 'small'
			? 'w-[620px] sm:w-[284px]'
			: 'w-[1022px] sm:w-[260px]';

	return (
		<div
			className={`flex flex-col gap-2 rounded-lg bg-white px-2 py-1 text-black2 ${layerWidthClass}`}
		>
			<div className='flex flex-row items-center gap-2'>
				<h1 className='grow text-2xl font-bold'>{tableName}</h1>
				{needPage && (
					<div className='flex flex-row items-center gap-2'>
						<p className='text-right text-sm font-normal'>1 페이지 중 1</p>
						<div>
							<IconButton
								buttonSize='xs'
								rounded='left'
								src='/icons/arrowBefore.svg'
								iconSize={8}
								alt='previous page'
								onClick={onPrevious}
							/>
							<IconButton
								buttonSize='xs'
								rounded='right'
								src='/icons/arrowNext.svg'
								iconSize={8}
								alt='next page'
								onClick={onNext}
							/>
						</div>
					</div>
				)}
				{isInvite && (
					<TextButton
						buttonSize='xs'
						textSize='xs'
						color='primary'
						onClick={onInvite}
						className='flex flex-row items-center justify-center gap-1'
					>
						<Image
							src='/icons/add_box.svg'
							width={16}
							height={16}
							alt='초대하기'
						/>
						초대하기
					</TextButton>
				)}
			</div>
			{children}
		</div>
	);
}
