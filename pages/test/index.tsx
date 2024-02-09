
import Card from '@/src/components/ui/Card';

export default function Page() {
	const nickname = '각별님 너무 좋아';
	return (

		<div className=''>
			<Card
				title='title'
				tags={['프론트엔드', '상', '랄랄라라']}
				dueDate='2023-01-31'
				imageUrl='/images/card_image1.png'
				profileImageUrl=''/>

		<div className='flex size-full flex-col gap-6 bg-violet2 p-1'>
			<DefaultProfileImage
				nickname={nickname}
				classNames='size-[96px] text-[16px]'
			/>
		</div>
	);
}
