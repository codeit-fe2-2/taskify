import Image from 'next/image';

interface AddButtonProps {
	bgColor?: string;
	size?: string;
}

export default function AddButton({ bgColor, size }: AddButtonProps) {
	const additionalClasses = bgColor ? bgColor : ''; // classNames가 존재하면 그대로 사용, 없으면 빈 문자열로 설정
	return (
		<Image
			src='/icons/chip_add.svg'
			width={14}
			height={14}
			alt='더하기 아이콘'
			className={`rounded-sm ${additionalClasses} ${bgColor === 'todoBg' ? '' : 'bg-violet1'} ${size === 'todoSize' ? 'size-[28px]' : 'sm:size-[14.5px] md:size-[14.5px] lg:size-[16px]'}`}
		/>
	);
}
