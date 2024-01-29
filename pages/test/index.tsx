import {
	ModalCommentInput,
	ModalDeadlineInput,
	ModalImageInput,
	ModalManagerInput,
	ModalProgressInput,
	ModalTagInput,
	ModalTitleInput,
} from '@/src/components/ui/ModalInput';
import { ModalInputInput } from '@/src/components/ui/TestInput';

export default function Page() {
	return (
		<>
			<ModalInputInput type='title' />
			<ModalInputInput type='deadline' />
			<ModalInputInput type='tag' />

			<hr className='my-4' />

			<ModalProgressInput />
			<ModalManagerInput />
			<ModalCommentInput />
			<ModalTitleInput />
			<ModalDeadlineInput />
			<ModalTagInput />
			<ModalImageInput />
		</>
	);
}
