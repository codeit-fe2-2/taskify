import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import TextButton from '@/src/components/ui/Button/TextButton';
import Input from '@/src/components/ui/Input';
import ContextModal from '@/src/components/ui/Modal/ContextModal';
import { PAGE_ROUTES } from '@/src/constants/routes';
import { useAuth } from '@/src/contexts/AuthProvider';
import { useModal } from '@/src/contexts/ModalProvider';
import { usePostLogin } from '@/src/hooks/useAuth/usePostLogin';

const { HOME, MY_DASHBOARD, SIGNUP } = PAGE_ROUTES;

export default function Page() {
	const router = useRouter();
	const { user } = useAuth();
	const formRef = useRef<HTMLFormElement>(null);
	const [isValueMissing, setIsValueMissing] = useState(true);
	const { openModal, closeModal } = useModal();
	const modalId = crypto.randomUUID();
	const { data, error, execute: postLogin } = usePostLogin(formRef);

	const checkValidityOnChange = (event: ChangeEvent<HTMLFormElement>) => {
		const formChildEl = event.currentTarget.elements;
		const allInputsHasValue = Array.from(formChildEl).every((el) => {
			return el.tagName === 'INPUT'
				? !(el as HTMLInputElement).validity.valueMissing
				: true;
		});
		setIsValueMissing(!allInputsHasValue);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		void postLogin();
	};
	useEffect(() => {
		if (data || user) {
			void router.push(MY_DASHBOARD);
		}
		if (error) {
			openModal(
				<ContextModal buttonText='확인' buttonClick={() => closeModal(modalId)}>
					{error.response.data.message}
				</ContextModal>,
				modalId,
			);
		}
	}, [data, error, router]);

	return (
		<div className='my-56 flex flex-col items-center sm:my-36 md:my-60'>
			<div className='flex flex-col items-center gap-[10px]'>
				<Link href={HOME}>
					<Image
						src='/icons/logo_large.svg'
						alt='taskify 로고'
						width={200}
						height={279}
						className='sm:h-auto sm:w-[120px]'
					/>
				</Link>
				<span className='text-xl/6 font-medium text-black2'>
					오늘도 만나서 반가워요!
				</span>
			</div>
			<div className='mt-[38px]'>
				<form
					className='flex w-[520px] flex-col items-center gap-4 sm:w-[351px]'
					onSubmit={handleSubmit}
					onChange={checkValidityOnChange}
					autoComplete='on'
					ref={formRef}
				>
					<Input
						type='email'
						label='이메일'
						name='email'
						pattern='/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i'
						placeholder='이메일을 입력해주세요'
						invalidMessage='이메일 형식으로 작성해주세요'
					></Input>
					<Input
						type='password'
						label='비밀번호'
						name='password'
						pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
						placeholder='비밀번호를 입력해주세요'
						invalidMessage='영문자와 숫자를 포함한 8자 이상의 비밀번호를 입력하세요'
					></Input>
					<TextButton
						type='submit'
						buttonSize='xl'
						textSize='lg'
						color={isValueMissing ? 'third' : 'primary'}
						disabled={isValueMissing}
						fullWidth={true}
						className='mt-1 text-nowrap'
					>
						로그인
					</TextButton>
				</form>
			</div>
			<span className='mt-6'>
				회원이 아니신가요?{' '}
				<Link
					href={SIGNUP}
					className='text-violet2 underline underline-offset-4'
				>
					회원가입 하기
				</Link>
			</span>
		</div>
	);
}
