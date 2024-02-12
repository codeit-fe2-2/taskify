import { useState } from 'react';

import { putChangedPassword } from '@/src/apis/myPage/putChangedPassword';
import { useModal } from '@/src/contexts/ModalProvider';

import TextButton from '../ui/Button/TextButton';
import AlertModal from '../ui/Modal/AlertModal';
interface FormState {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
}
interface PasswordChangeProps {
	updateToastMessage: (message: string) => void;
}
function PasswordChange({ updateToastMessage }: PasswordChangeProps) {
	const { openModal, closeModal } = useModal();
	const [passwordError, setPasswordError] = useState<string>('');
	const [disabled, setDisabled] = useState<boolean>(true);
	//form에서 동작하는 값들 묶어서 관리
	const [formState, setFormState] = useState<FormState>({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const modalId = crypto.randomUUID();
	//비밀번호 일치관계 확인
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[id]: value,
		}));
		if (id === 'confirmPassword' && value !== formState.newPassword) {
			setPasswordError('비밀번호가 일치하지 않습니다.');
		} else {
			setPasswordError('');
		}

		setDisabled(id === 'confirmPassword' && value !== formState.newPassword);
	};
	//비밀번호 조건 미충족시 실행하지않고 오류보여줌
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		void (async () => {
			if (formState.newPassword.length < 8) {
				setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
				return;
			}
			//이전비밀번호와 변경비밀번호 put요청을 보냄 비밀번호 오류는 userInfo에 전달받지 않으므로
			//put 요청으로 기존비밀번호 오류로 반환되는 거절을 이용해 modal로 비밀번호 오류를 알려줌
			try {
				await putChangedPassword(
					formState.currentPassword,
					formState.newPassword,
				);

				updateToastMessage('비밀번호가 변경되었습니다.');
				setFormState({
					currentPassword: '',
					newPassword: '',
					confirmPassword: '',
				});
			} catch (error) {
				handleClickOpenModal();
			}
		})();
	};

	const handleClickOpenModal = () => {
		openModal(
			<AlertModal
				message='비밀번호가 일치하지 않습니다.'
				cancelButtonName='확인'
				onCancel={() => closeModal(modalId)}
			/>,
			modalId,
		);
	};
	return (
		<div className='w-[620px] rounded-lg bg-white px-7 py-8 text-black2 sm:w-[284px] sm:px-5 sm:pb-5 sm:pt-7 md:w-[544px]'>
			<div className='text-2xl font-bold leading-7 sm:text-xl sm:leading-6'>
				비밀번호 변경
			</div>

			<div className=' mt-8 flex gap-4 sm:mt-6 '>
				<form onSubmit={handleSubmit}>
					<div className='flex w-[564px] flex-col gap-2.5 sm:w-[244px] md:w-[488px]'>
						<label
							htmlFor='password'
							className=' text-lg font-medium leading-5'
						>
							현재 비밀번호
						</label>
						<input
							type='password'
							id='currentPassword'
							className='h-12 w-full  rounded-md border border-gray3  pl-4 text-base leading-5  hover:cursor-auto'
							placeholder='현재 비밀번호 입력'
							value={formState.currentPassword}
							onChange={handleInputChange}
						/>
						<label
							htmlFor='newpassword'
							className='mt-2.5 text-base font-medium leading-5 sm:text-sm sm:leading-4'
						>
							새 비밀번호
						</label>
						<input
							type='password'
							id='newPassword'
							className={`h-12  w-full rounded-md border pl-4 text-base leading-5 sm:text-sm sm:leading-4 ${passwordError ? 'border-red' : 'border-gray3'}`}
							placeholder='새 비밀번호 입력'
							value={formState.newPassword}
							onChange={handleInputChange}
						/>
						<label
							htmlFor='newpasswordcheck'
							className='mt-2.5 text-lg font-medium leading-5'
						>
							새 비밀번호 확인
						</label>
						<input
							type='password'
							id='confirmPassword'
							className={`h-12  w-full rounded-md border  pl-4 text-base leading-5 sm:text-sm sm:leading-4 ${passwordError ? 'border-red' : 'border-gray3'}`}
							placeholder='새 비밀번호 확인'
							value={formState.confirmPassword}
							onChange={handleInputChange}
						/>
						{passwordError && <span className='text-red'>{passwordError}</span>}
					</div>
					<div className='mt-6 flex justify-end'>
						<TextButton
							type='submit'
							className=' px-[29.5px] py-[7.5px]  text-sm sm:px-[25px] sm:py-[7px] sm:text-xs'
							color='primary'
							disabled={disabled}
						>
							변경
						</TextButton>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PasswordChange;
