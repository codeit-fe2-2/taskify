import Image from 'next/image';

import IconButton from '../Button/IconButton';
import TextButton from '../Button/TextButton';

interface ListTableProps<T> {
	tableName: string;
	isInvite?: boolean;
	firstLabel: string;
	buttonText: string;
	data: T[];
}

interface ItemProps {
	text: string;
	imageUrl?: string;
	buttonText: string;
}

const Item = ({ text, imageUrl, buttonText }: ItemProps) => (
	<>
		{imageUrl && (
			<div
				className='size-[26px] rounded-full'
				style={{
					backgroundImage: `url(${imageUrl})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			/>
		)}
		<p className='grow'>{text}</p>
		<TextButton buttonSize='xxs' color='secondary' textSize='sm'>
			{buttonText}
		</TextButton>
	</>
);

export default function MemberTable<T>({
	tableName,
	isInvite,
	firstLabel,
	buttonText,
	data,
}: ListTableProps<T>) {
	return (
		<div className='flex flex-col gap-2 px-2 py-1'>
			<div className='flex flex-row gap-2'>
				<h1>{tableName}</h1>
				<p className='grow text-right'>1 페이지 중 1</p>
				<div>
					<IconButton
						buttonSize='xs'
						rounded='left'
						src='/icons/arrowBefore.svg'
						iconSize={8}
						alt='previous page'
					/>
					<IconButton
						buttonSize='xs'
						rounded='right'
						src='/icons/arrowNext.svg'
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
				<p>{firstLabel}</p>
				<ul className='flex flex-col justify-center gap-2'>
					{data.map((item, index) => (
						<li
							key={index}
							className={`flex flex-row items-center gap-3 py-3 ${
								index < data.length - 1 ? 'border-b' : '' // 마지막 li를 제외한 각 li에 border-bottom 추가
							}`}
						>
							<Item
								text={item.text}
								imageUrl={item.profileImageUrl}
								buttonText={buttonText}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
