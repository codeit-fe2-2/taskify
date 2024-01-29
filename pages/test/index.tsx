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
import ModalTextareaInput from '@/src/components/ui/ModalInput/ModalTextareaInput';

export default function Page() {
	return (
		<>
			<ModalInput label='제목' />
			<br />
			<ModalInput label='마감일' />
			<br />
			<ModalInput label='태그' />
			<br />
			<ModalDropdown label='상태' />
			<br />
			<ModalDropdown label='담당자' />
			<br />
			<ModalTextareaInput label='댓글' />

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
