import BasicLayout from '@/src/components/layout/BasicLayout';
import CardDetails from '@/src/components/ui/Modal/CardDetails';
import { useModal } from '@/src/contexts/ModalProvider';

export default function MyDashboardPage() {
	const { openModal, closeModal } = useModal();
	const modalId = crypto.randomUUID();
	const cardId = 2742;
	const handleClickOpenModal = () => {
		openModal(<CardDetails cardId={cardId} />, modalId);
	};
	return (
		<BasicLayout>
			<button className='bg-pink' onClick={handleClickOpenModal}>
				모달 얍
			</button>
		</BasicLayout>
	);
}
