import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import TextButton from '@/src/components/ui/Button/TextButton';
import Icon from '@/src/components/ui/Icon';
import Input from '@/src/components/ui/Input';
import ConfirmModal from '@/src/components/ui/Modal/ConfirmModal';
import { useModal } from '@/src/contexts/ModalProvider';
import { useInviteMember } from '@/src/hooks/dashboard/useInviteMember';

export default function InvitationButton({
	isCanInvite,
}: {
	isCanInvite: boolean;
}) {
	const { openModal, closeModal } = useModal();
	const [invitedEmail, setInvitedEmail] = useState<string>('');
	const invitedEmailRef = useRef(invitedEmail);
	const { data, execute: inviteMember, error } = useInviteMember(invitedEmail);
	const inviteModalId = crypto.randomUUID();

	useEffect(() => {
		invitedEmailRef.current = invitedEmail;
	}, [invitedEmail]);

	useEffect(() => {
		if (data) {
			alert('해당 회원을 현재 대시보드에 초대했습니다.');
			closeModal(inviteModalId);
		}
		if (error) {
			alert(
				error.response?.data?.message ||
					'해당 회월을 현재 대시보드에 초대하는데 실패했습니다.',
			);
		}
	}, [data, error]);

	const handleChangeInviteEmailInput = (value: string) => {
		setInvitedEmail(value);
	};

	const handleModalConfirmClick = () => {
		void inviteMember({ newPayload: { email: invitedEmailRef.current } });
	};

	const handleInviteButtonClick = () => {
		openModal(
			<ConfirmModal
				cancelText='취소'
				cancelClick={() => closeModal(inviteModalId)}
				confirmText='초대'
				confirmClick={handleModalConfirmClick}
			>
				<div className='mb-7 flex w-[540px] flex-col gap-8 sm:max-w-[327px] sm:gap-6'>
					<span className='text-2xl font-bold sm:text-xl'>초대하기</span>
					<Input
						type='text'
						label='이메일'
						className='sm:max-w-full'
						onChange={handleChangeInviteEmailInput}
					/>
				</div>
			</ConfirmModal>,
			inviteModalId,
		);
	};
	return (
		<TextButton
			type='button'
			color='third'
			onClick={handleInviteButtonClick}
			textSize='md'
			className={clsx(
				'flex items-center gap-2 px-4 py-2.5  sm:px-3 sm:py-1.5 sm:text-sm md:text-sm',
				!isCanInvite ? 'text-gray3' : 'text-gray5',
			)}
			disabled={!isCanInvite}
		>
			<Icon
				name='add_box'
				width={20}
				height={20}
				color={!isCanInvite ? '#EEEEEE' : ''}
			/>
			초대하기
		</TextButton>
	);
}
