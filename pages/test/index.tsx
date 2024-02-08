import Card from '@/src/components/ui/Card';

export default function Page() {
	return (
		<div className=''>
			<Card
				title='title'
				tags={['프론트엔드', '상', '랄랄라라']}
				dueDate='2023-01-31'
				imageUrl='/images/card_image1.png'
				profileImageUrl=''
			/>
		</div>
	);
}
