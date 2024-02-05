import { ReactNode } from 'react';

import TextButton from '@/src/components/ui/Button/TextButton';

export default function ConfirmModal({
	children,
	cancelText = '취소',
	cancelClick,
	confirmText = '확인',
	confirmClick,
	classNames,
}: {
	children: ReactNode;
	cancelText: string;
	cancelClick: () => void;
	confirmText: string;
	confirmClick: () => void;
	classNames: string;
}) {
	return (
		<div className={`flex flex-col justify-between p-7 ${classNames}`}>
			{children}
			<div className='flex justify-end gap-3 sm:mt-9 sm:justify-center'>
				<TextButton
					buttonSize='md'
					textSize='md'
					color='secondary'
					className=''
					onClick={cancelClick}
				>
					{cancelText}
				</TextButton>
				<TextButton
					buttonSize='md'
					textSize='md'
					color='primary'
					className=''
					onClick={confirmClick}
				>
					{confirmText}
				</TextButton>
			</div>
		</div>
	);
}
