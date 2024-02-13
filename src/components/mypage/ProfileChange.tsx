/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react';

import { putChangedUserInfo } from '@/src/apis/myPage/putChangedUserInfo';
import { User } from '@/src/types/user';

import TextButton from '../ui/Button/TextButton';
import AddImage from './AddImage';
interface profileChangeProps {
	userInfo: User;
	updateToastMessage: (message: string) => void;
}
export default function ProfileChange({
	userInfo,
	updateToastMessage,
}: profileChangeProps) {
	const [imageUrl, setImageUrl] = useState<string | null>('');
	const [nickname, setNickname] = useState<string>('');
	// 이미지 URL변경 함수 실행후 값 저장함수
	const handleImageURL = (url: string | null) => {
		setImageUrl(url);
	};
	//사용자가 이전 본인이 선택한 이미지를 유지하고 싶을때 리셋
	const handleImageReset = () => {
		setImageUrl(userInfo.profileImageUrl);
	};
	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			//nickname과 imageUrl 값으로 put요청 보내는 함수 성공시 토스트메시지
			await putChangedUserInfo(nickname, imageUrl || '');
			updateToastMessage('변경사항이 저장되었습니다.');
		} catch (error) {
			// 네트워크 오류 등으로 인한 실패
			console.error('변경 사항을 저장하는 중 오류 발생:', error);
		}
	};
	//기본 이미지 이메일 창에 보여줄 값 설정
	useEffect(() => {
		if (userInfo) {
			setImageUrl(userInfo.profileImageUrl);
			setNickname(userInfo.nickname);
		}
	}, [userInfo]);
	return (
		<div className='w-[620px] rounded-lg bg-white px-7 py-8 text-black2 sm:w-[284px] sm:px-5 sm:pb-5 sm:pt-7 md:w-[544px]'>
			<div className='text-2xl  font-bold leading-7 sm:text-xl sm:leading-6'>
				프로필
			</div>

			<div className=' mt-8 flex gap-4 sm:flex-col'>
				<AddImage imageUrl={imageUrl} handleImageURL={handleImageURL} />

				<form onSubmit={handleFormSubmit}>
					<div className='flex flex-col gap-2.5'>
						<label htmlFor='email' className=' text-lg font-medium leading-5'>
							이메일
						</label>
						<input
							type='text'
							className='h-12 w-[366px] rounded-md border border-gray3  pl-4 text-base leading-5  text-gray4 hover:cursor-auto sm:h-[42px] sm:w-[244px] md:w-[290px]'
							readOnly
							onFocus={(e) => e.target.blur()}
							value={userInfo?.email || ''}
						/>
						<label
							htmlFor='nickname'
							className='mt-2.5 text-lg font-medium leading-5 sm:mt-1.5'
						>
							닉네임
						</label>
						<input
							type='text'
							className='h-12 w-[366px] rounded-md  border border-gray3  pl-4 text-base leading-5 sm:h-[42px] sm:w-[244px] md:w-[290px]'
							value={nickname}
							onChange={(e) => setNickname(e.target.value)}
						/>
					</div>
					<div className='mt-6 flex justify-end sm:mt-4'>
						{userInfo.profileImageUrl !== imageUrl && (
							<TextButton
								className='mr-2 px-[29.5px] py-[7.5px] text-sm sm:px-[25px] sm:py-[7px] sm:text-xs'
								color='secondary'
								onClick={handleImageReset}
							>
								원래대로
							</TextButton>
						)}
						<TextButton
							type='submit'
							className=' px-[29.5px] py-[7.5px]  text-sm sm:px-[25px] sm:py-[7px] sm:text-xs'
							color='primary'
						>
							저장
						</TextButton>
					</div>
				</form>
			</div>
		</div>
	);
}
