import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

import { postProfileImageURL } from '@/src/apis/myPage/postProfileImageURL';

interface AddImageProps {
	imageUrl: string | null;
	handleImageURL: (url: string | null) => void;
}

function AddImage({ imageUrl, handleImageURL }: AddImageProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	//이미지 비동기 작업중 보여줄 loading 처리
	const handleButtonClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];

		if (!file) return;
		setIsLoading(true);
		try {
			//usePostProfileImageURL 이미지 post요청 보내고 변환 URL값을 받아옴
			const imageUrl = await postProfileImageURL(file);

			handleImageURL(imageUrl);
		} catch (error) {
			console.error('이미지 업로드 중 오류가 발생했습니다.', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<button
			className={`relative flex size-[182px] items-center justify-center overflow-hidden rounded-md sm:size-[100px] ${!imageUrl && 'bg-[#F5F5F5]'}`}
			onClick={handleButtonClick}
		>
			{isLoading ? (
				<Image
					width={50}
					height={50}
					alt='loading'
					src='/icons/loading.png'
					className='animate-spin'
				/>
			) : (
				<div className='flex size-full items-center justify-center transition duration-300 hover:scale-110'>
					{imageUrl ? (
						<Image
							src={imageUrl}
							alt='이미지 미리보기'
							fill
							className=' object-cover  '
						/>
					) : (
						<Image
							src='/icons/plus.svg'
							alt='iconImage'
							width={30}
							height={30}
							className='sm:size-5'
						/>
					)}
				</div>
			)}

			<input
				type='file'
				accept='image/*'
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onChange={handleImageChange}
				className='hidden h-12 rounded-md  border border-gray3 text-base leading-5'
				ref={inputRef}
			/>
		</button>
	);
}
export default AddImage;
