import {
	ModalCommentInput,
	ModalDeadlineInput,
	ModalImageInput,
	ModalManagerInput,
	ModalProgressInput,
	ModalTagInput,
	ModalTitleInput,
} from '@/src/components/ui/ModalInput';
import ModalDropdown from '@/src/components/ui/ModalInput/ModalDropdown';
import ModalInput from '@/src/components/ui/ModalInput/ModalInput';

export default function Page() {
	return (
		<>
			<ModalInput type='제목' />
			<br />
			<ModalInput type='마감일' />
			<br />
			<ModalInput type='태그' />
			<br />
			<ModalDropdown type='상태' />
			<br />
			<ModalDropdown type='담당자' />

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
