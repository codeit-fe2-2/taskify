import Image from 'next/image';

import IconButton from '../Button/IconButton';
import TextButton from '../Button/TextButton';

interface MemberTableProps {
	label: string;
	isInvite?: boolean;
}

export default function MemberTable({ label, isInvite }: MemberTableProps) {
	return (
		<div className='flex flex-col gap-2 px-2 py-1'>
			<div className='flex flex-row gap-2'>
				<h1>{label}</h1>
				<p className='grow text-right'>1 페이지 중 1</p>
				<div>
					<IconButton
						buttonSize='xs'
						rounded='left'
						src='\icons\arrowBefore.svg'
						iconSize={8}
						alt='previous page'
					/>
					<IconButton
						buttonSize='xs'
						rounded='right'
						src='\icons\arrowNext.svg'
						iconSize={8}
						alt='next page'
					/>
				</div>
				{isInvite && (
					<TextButton
						buttonSize='xs'
						textSize='xs'
						color='primary'
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
			<div className='flex flex-col gap-2'>
				<p>이름</p>
				<ul className='flex flex-col justify-center gap-2'>
					<li className='flex flex-row items-center gap-3 py-3'>
						<div className='size-10 rounded-full bg-violet2' />
						<p className='grow'>이서영</p>
						<TextButton buttonSize='xxs' color='secondary' textSize='sm'>
							삭제
						</TextButton>
					</li>
				</ul>
			</div>
		</div>
	);
}
