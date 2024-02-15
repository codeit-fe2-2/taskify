import { ReactNode, useEffect, useRef } from 'react';

interface Props {
	id: string;
	children: ReactNode;
	onRemove: (id: string) => void;
}

function ModalWrapper({ children, id, onRemove }: Props) {
	const ref = useRef<HTMLDialogElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (ref.current && ref.current === e.target) {
			onRemove(id);
		}
	};

	const handleKeydownEsc = (e: KeyboardEvent) => {
		if (e.keyCode === 27) {
			onRemove(id);
		}
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.showModal();
			document.addEventListener('keydown', handleKeydownEsc);
			document.addEventListener('click', handleClickOutside);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleKeydownEsc);
			document.removeEventListener('click', handleClickOutside);
			document.body.style.overflow = ' auto';
			if (ref.current) {
				ref.current.close();
			}
		};
	}, [id]);

	return (
		<dialog ref={ref} className='rounded-lg scrollbar-hide'>
			{children}
		</dialog>
	);
}

export default ModalWrapper;
