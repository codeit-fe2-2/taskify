import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import AddButton from '../AddButton';

interface ModalImageProps {
	label: string;
	onImageSelect: (imageUrl: File | null) => void;
}

export default function ModalImage({
	label,
	onImageSelect,
}: ModalImageProps): JSX.Element {
	const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

	const handleFileInputClick = () => {
		const fileInput = document.getElementById('fileInput') as HTMLInputElement;
		fileInput.click();
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];

		if (selectedFile) {
			const reader = new FileReader();

			reader.onload = (event) => {
				const imageSrc = event.target?.result as string;
				setBackgroundImage(imageSrc);
				onImageSelect(selectedFile);
			};

			reader.readAsDataURL(selectedFile);
		}
	};

	return (
		<div className='inline-flex flex-col items-start gap-2.5'>
			<label htmlFor='comment' className='text-lg font-medium'>
				{label}
			</label>
			<button
				onClick={handleFileInputClick}
				className='group relative flex size-[76px] shrink-0 items-center justify-center rounded-md bg-white'
			>
				{backgroundImage ? (
					<>
						<Image
							src={backgroundImage}
							fill={true}
							alt='test Image'
							className='rounded-md'
						/>
						<div className='z-10 flex size-[76px] items-center justify-center rounded-md bg-black4 opacity-0 group-hover:opacity-60'>
							<Image
								src='/icons/edit.svg'
								width={30}
								height={30}
								alt='Edit Image Icon'
							/>
						</div>
					</>
				) : (
					<div className='rounded-md bg-gray3 p-6 '>
						<AddButton bgColor='todoBg' size='todoSize' />
					</div>
				)}
				<input
					type='file'
					id='fileInput'
					className='hidden'
					onChange={handleFileChange}
				/>
			</button>
		</div>
	);
}
