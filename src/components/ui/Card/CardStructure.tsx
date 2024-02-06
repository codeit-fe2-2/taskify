import AddCard from './AddCard';
import Card from './Card';
import CardTitle from './CardTitle';

export default function CardStructure() {
	return (
		<div className='flex max-w-[50%] flex-col gap-4 lg:w-[254px] '>
			<CardTitle />
			<AddCard />
			<Card />
		</div>
	);
}
