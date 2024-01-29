import {
	ModalCommentInput,
	ModalDeadlineInput,
	ModalImageInput,
	ModalManagerInput,
	ModalProgressInput,
	ModalTagInput,
	ModalTitleInput,
} from '@/src/components/ui/ModalInput';
import { ModalInputInput } from '@/src/components/ui/ModalInput/ModalInputInput';

export default function Page() {
	return (
		<>
			<ModalInputInput type='제목' />
			<br />
			<ModalInputInput type='마감일' />
			<br />
			<ModalInputInput type='태그' />

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
