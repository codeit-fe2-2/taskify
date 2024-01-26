import {
	ModalProgressInput,
	ModalManagerInput,
	ModalCommentInput,
	ModalTitleInput,
	ModalDeadlineInput,
	ModalTagInput,
	ModalImageInput,
} from '@/src/components/ui/ModalInput';

export default function Page() {
	return (
		<>
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
