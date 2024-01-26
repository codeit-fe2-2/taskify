import { useState } from 'react';
//눈 모양, 반응형
type InputTypes = 'email' | 'username' | 'password';

interface InputProps {
	type: InputTypes;
	onChange?: (value: string) => void;
}
interface PasswordCheckProps {
	type: 'password-check';
	password: string;
	onChange?: (value: string) => void;
}

const cls = (...classnames: string[]) => {
	return classnames.join(' ');
};

const types = {
	email: {
		inputType: 'email',
		label: '이메일',
		regex: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
		invalidMessage: '이메일 형식으로 작성해주세요',
		placeholder: '이메일을 입력해주세요',
	},
	username: {
		inputType: 'text',
		label: '닉네임',
		regex: '^.{0,10}$',
		invalidMessage: '10자 이하로 작성해주세요',
		placeholder: '닉네임을 입력해주세요',
	},
	password: {
		inputType: 'password',
		label: '비밀번호',
		regex: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
		invalidMessage: '영문자와 숫자를 포함한 8자 이상의 비밀번호를 입력하세요',
		placeholder: '비밀번호를 입력해주세요',
	},
	'password-check': {
		inputType: 'password',
		label: '비밀번호 확인',
		regex: '',
		invalidMessage: '비밀번호가 일치하지 않습니다',
		placeholder: '비밀번호를 한 번 더 입력해주세요',
	},
};

export default function Input({
	type,
	onChange = () => {},
	...props
}: InputProps | PasswordCheckProps) {
	const { inputType, label, regex, invalidMessage, placeholder } = types[type];
	const [value, setValue] = useState('');
	const [htmlType, setHtmlType] = useState(inputType);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		onChange(event.target.value);
	};
	const validateOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		const isValid = event.target.validity.valid;
		!isValid
			? event.target.setAttribute('data-invalid', '')
			: event.target.removeAttribute('data-invalid');
	};

	const togglePasswordTypeOnClick = () => {
		setHtmlType((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	return (
		<div className='flex flex-col items-start gap-2'>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
			<label htmlFor={type} className='text-base text-black2'>
				{label}
			</label>
			<div className='relative w-[520px]'>
				<input
					id={type}
					type={htmlType}
					value={value}
					placeholder={placeholder}
					onChange={handleChange}
					onBlur={validateOnBlur}
					required
					pattern={
						type !== 'password-check'
							? regex
							: `^${(props as PasswordCheckProps).password}$`
					}
					className={cls(
						'peer flex flex-col items-center w-full h-[50px] py-3 px-4 text-base',
						type === 'password' ? 'text-black3' : 'text-black2',
						'border-[1px] border-solid rounded-lg border-gray3 placeholder:text-gray4 focus:outline-none focus:border-purple data-[invalid]:border-red',
					)}
				/>
				{(type === 'password' || type === 'password-check') && (
					<button
						onClick={togglePasswordTypeOnClick}
						className={cls(
							'absolute right-4 top-[13px] size-6 border-none',
							htmlType === 'password'
								? 'bg-[url("/icons/visibility_off.svg")]'
								: 'bg-[url("/icons/visibility_on.svg")]',
						)}
					/>
				)}
				<span className='hidden text-sm text-red peer-data-[invalid]:block'>
					{invalidMessage}
				</span>
			</div>
		</div>
	);
}
