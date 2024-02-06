import Image from 'next/image';
import { ReactNode } from 'react';

import IconButton from '../Button/IconButton';
import TextButton from '../Button/TextButton';

interface TableLayerProps {
	tableName: string;
	isInvite?: boolean;
	needPage?: { totalPages: number; currentPage: number };
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
			<div className='relative flex flex-row items-center gap-2'>
				<h1 className='grow text-2xl font-bold sm:text-xl'>{tableName}</h1>
				{needPage && (
					<div className='flex flex-row items-center gap-2'>
						<p className='text-right text-sm font-normal'>{`${needPage.totalPages} 페이지 중 ${needPage.currentPage}`}</p>
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
						textSize='xs'
						color='primary'
						onClick={onInvite}
						className='flex h-8 w-[105px] flex-row items-center justify-center gap-1 sm:absolute sm:right-0 sm:top-10 sm:h-[28px] sm:w-[86px] sm:text-xs'
					>
						<Image
							src='/icons/add_box.svg'
							width={16}
							height={16}
							alt='초대하기'
							className='sm:size-3.5'
						/>
						초대하기
					</TextButton>
				)}
			</div>
			{children}
		</div>
	);
}
