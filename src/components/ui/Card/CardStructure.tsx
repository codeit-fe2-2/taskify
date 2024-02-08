import AddCard from './AddCard';
import Card from './Card';
import CardTitle from './CardTitle';

export default function CardStructure() {
	return (
		<div className='flex max-w-[50%] flex-col gap-4 lg:w-[254px] '>
			<CardTitle />
			<AddCard />
			<Card
				title='제목'
				profileImageUrl=''
				tags={['프론트앤드', '백엔드']}
				dueDate='2022-02-21'
				ImageUrl='https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/2-2_10771_1707389075800.jpeg'
			/>
		</div>
	);
}
