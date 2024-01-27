import clsx from 'clsx';
import { HTMLInputTypeAttribute, useState } from 'react';

type GeneralInputType =
	| 'number'
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

interface generalInputProps {
	id: string;
	type: GeneralInputType;
	label?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
}

interface signInputProps extends Omit<generalInputProps, 'type'> {
	type: Extract<HTMLInputTypeAttribute, 'text' | 'email' | 'password'>;
	regex: string;
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
		id,
		type,
		label,
		placeholder,
		onChange,
		regex,
		invalidMessage,
		...rest
	} = props as signInputProps;
	// const { id, type, label, placeholder, onChange } = props;
	// const { regex, invalidMessage } = props as signInputProps;
	const [value, setValue] = useState('');
	const [htmlType, setHtmlType] = useState(type);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		if (onChange) {
			onChange(event.target.value);
		}
	};
	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (regex) {
			addInvalidClass(event);
		}
	};
	const togglePasswordTypeOnClick = () => {
		setHtmlType((prev: HTMLInputTypeAttribute) =>
			prev === 'password' ? 'text' : 'password',
		);
	};

	return (
		<div className='flex flex-col items-start gap-2'>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
			{label && (
				<label htmlFor={id} className='text-base text-black2'>
					{label}
				</label>
			)}
			<div className='relative w-[520px] sm:w-[351px]'>
				<input
					id={id}
					type={htmlType}
					value={value}
					placeholder={placeholder}
					onChange={handleChange}
					onBlur={handleBlur}
					required
					pattern={regex}
					className={clsx(
						'peer flex h-[50px] w-full flex-col items-center px-4 py-3 text-base',
						type === 'password' ? 'text-black3' : 'text-black2',
						'rounded-lg border-[1px] border-solid border-gray3 placeholder:text-gray4 focus:border-purple focus:outline-none data-[invalid]:border-red',
					)}
					{...rest}
				/>
				{type === 'password' && (
					<button
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
					<span className='hidden text-sm text-red peer-data-[invalid]:block'>
						{invalidMessage}
					</span>
				)}
			</div>
		</div>
	);
}
