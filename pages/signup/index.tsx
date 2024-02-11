import { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

import TextButton from '@/src/components/ui/Button/TextButton';
import Input from '@/src/components/ui/Input';
import ContextModal from '@/src/components/ui/Modal/ContextModal';
import { PAGE_ROUTES } from '@/src/constants/routes';
import { useModal } from '@/src/contexts/ModalProvider';
import { usePostSignup } from '@/src/hooks/useAuth/usePostSignup';
import { PostSignResponseData, SignupFormElement } from '@/src/types/auth';

const { HOME, SIGNIN } = PAGE_ROUTES;

export default function Page() {
	const router = useRouter();
	const [isAllValid, setIsAllValid] = useState(false);
	const { openModal, closeModal } = useModal();
	const modalId = crypto.randomUUID();

	const { data, error, execute: postSignup } = usePostSignup();

	const checkValidityOnInput = (event: FormEvent<SignupFormElement>) => {
		const isAllInputValid = event.currentTarget.checkValidity();
		const isToSChecked = event.currentTarget.ToS.checked;
		setIsAllValid(isAllInputValid && isToSChecked);
	};

	const handleSubmit = (event: FormEvent<SignupFormElement>) => {
		event.preventDefault();
		const { email, nickname, password } = event.currentTarget;
		void postSignup({
			newPayload: {
				email: email.value,
				nickname: nickname.value,
				password: password.value,
			},
		});
	};

	useEffect(() => {
		if (data) {
			openModal(
				<ContextModal
					buttonText='확인'
					buttonClick={() => {
						closeModal(modalId);
						void router.push(SIGNIN);
					}}
				>
					가입이 완료되었습니다!
				</ContextModal>,
				modalId,
			);
		}
		if (error) {
			openModal(
				<ContextModal buttonText='확인' buttonClick={() => closeModal(modalId)}>
					{(error as AxiosError<PostSignResponseData>)?.response?.data
						.message || '네트워크 에러: 관리자에게 문의해주세요'}
				</ContextModal>,
				modalId,
			);
		}
	}, [data, error, router]);

	const [password, setPassword] = useState('');
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
					method='post'
					onInput={checkValidityOnInput}
					onSubmit={handleSubmit}
				>
					<Input
						type='email'
						label='이메일'
						name='email'
						pattern='^[0-9a-zA-Z]([\-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([\-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$'
						placeholder='이메일을 입력해주세요'
						invalidMessage='이메일 형식으로 작성해주세요'
					></Input>
					<Input
						type='text'
						label='닉네임'
						name='nickname'
						pattern='^.{0,10}$'
						placeholder='닉네임을 입력해주세요'
						invalidMessage='10자 이하로 작성해주세요'
					></Input>
					<Input
						type='password'
						label='비밀번호'
						name='password'
						pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
						placeholder='비밀번호를 입력해주세요'
						invalidMessage='영문자와 숫자를 포함한 8자 이상의 비밀번호를 입력하세요'
						onChange={(value: string) => {
							setPassword(value);
						}}
					></Input>
					<Input
						type='password'
						label='비밀번호 확인'
						name='passwordCheck'
						pattern={`^${password}$`}
						placeholder='비밀번호를 한 번 더 입력해주세요'
						invalidMessage='비밀번호가 일치하지 않습니다'
					></Input>
					<div className='mt-2 flex items-center gap-2 self-start'>
						<input
							type='checkbox'
							id='ToS'
							name='ToS'
							className='size-5 border-[1px] border-gray3 outline-none'
						/>
						<label htmlFor='ToS'>이용약관에 동의합니다.</label>
					</div>
					<TextButton
						type='submit'
						buttonSize='xl'
						textSize='lg'
						color='primary'
						disabled={!isAllValid}
						onClick={() => {}}
						fullWidth={true}
						className='mt-1 text-nowrap'
					>
						회원가입
					</TextButton>
				</form>
			</div>
			<span className='mt-[26px]'>
				이미 가입하셨나요?{' '}
				<Link
					href={SIGNIN}
					className='text-violet2 underline underline-offset-4'
				>
					로그인 하기
				</Link>
			</span>
		</div>
	);
}
