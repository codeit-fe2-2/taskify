import clsx from 'clsx';
import { HTMLInputTypeAttribute, useId, useRef, useState } from 'react';

type GeneralInputType = 'text' | 'number' | 'hidden' | 'search' | 'tel' | 'url';

interface generalInputProps {
	type: GeneralInputType;
	label?: string;
	placeholder?: string;
	className?: string;
	onChange?: (value: string) => void;
}

interface signInputProps extends Omit<generalInputProps, 'type'> {
	type: Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'password'>;
	name: 'email' | 'nickname' | 'password' | 'passwordCheck';
	pattern: string;
	invalidMessage: string;
}

type InputProps = generalInputProps | signInputProps;

const addInvalidClass = (event: React.FocusEvent<HTMLInputElement>) => {
	const isValid = event.target.validity.valid;
	!isValid
		? event.target.setAttribute('data-invalid', '')
		: event.target.removeAttribute('data-invalid');
};

export default function Input(props: InputProps) {
	const {
		type,
		name,
		label,
		placeholder,
		onChange,
		pattern,
		invalidMessage,
		className,
		...rest
	} = props as signInputProps;
	const id = useId();
	const inputRef = useRef<HTMLInputElement>(null);
	const [htmlType, setHtmlType] = useState(type);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event.target.value);
		}
	};
	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (pattern) {
			addInvalidClass(event);
		}
	};
	const togglePasswordTypeOnClick = () => {
		setHtmlType((prev: HTMLInputTypeAttribute) =>
			prev === 'password' ? 'text' : 'password',
		);
	};

	return (
		<div className='flex w-full flex-col items-start gap-2'>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
			{label && (
				<label htmlFor={id} className='text-black2 text-base'>
					{label}
				</label>
			)}
			<div className='relative w-full'>
				<input
					ref={inputRef}
					id={id}
					name={name}
					type={htmlType}
					placeholder={placeholder}
					onChange={handleChange}
					onBlur={handleBlur}
					required
					pattern={pattern}
					onInvalid={(e) => e.preventDefault()}
					className={clsx(
						'peer flex h-[50px] w-full flex-col items-center px-4 py-3 text-base',
						type === 'password' ? 'text-black3' : 'text-black2',
						'border-gray3 placeholder:text-gray4 focus:border-purple data-[invalid]:border-red rounded-lg border-[1px] border-solid focus:outline-none',
						className,
					)}
					{...rest}
				/>
				{type === 'password' && (
					<button
						type='button'
						onClick={togglePasswordTypeOnClick}
						className={clsx(
							'absolute right-4 top-[13px] size-6 border-none',
							htmlType === 'password'
								? 'bg-[url("/icons/visibility_off.svg")]'
								: 'bg-[url("/icons/visibility_on.svg")]',
						)}
					/>
				)}
				{invalidMessage && (
					<span className='text-red hidden text-sm peer-data-[invalid]:block'>
						{invalidMessage}
					</span>
				)}
			</div>
		</div>
	);
}
