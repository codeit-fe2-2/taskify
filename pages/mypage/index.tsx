import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getMe } from '@/src/apis/myPage/getMe';
import BasicLayout from '@/src/components/layout/BasicLayout';
import PasswordChange from '@/src/components/mypage/PasswordChange';
import ProfileChange from '@/src/components/mypage/ProfileChange';
import TextButton from '@/src/components/ui/Button/TextButton';
export default function Page() {
	const { userInfo, execute: fetchUserInfo } = getMe();
	const [toastMessage, setToastMessage] = useState<string>('');
	const router = useRouter();
	const handleToastMessage = (message: string) => {
		setToastMessage(message);
	};
	//toast메시지가 3초있다가 사라지게 하는 설정
	useEffect(() => {
		if (toastMessage) {
			void fetchUserInfo();
			const timer = setTimeout(() => {
				setToastMessage('');
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [toastMessage]);
	//이전페이지로 돌아가는 함수
	const handleTextButtonClick = () => {
		router.back();
	};
	return (
		<>
			<BasicLayout>
				<div className='p-5 sm:p-3'>
					<TextButton textSize='md' onClick={handleTextButtonClick}>
						<div className='mb-6 flex gap-1.5 sm:mb-5'>
							<Image
								width={20}
								height={20}
								src='/icons/arrowBefore.svg'
								alt='BeforeImg'
							/>
							돌아가기
						</div>
					</TextButton>

					{userInfo && (
						<div className='flex flex-col gap-3'>
							<ProfileChange
								userInfo={userInfo}
								updateToastMessage={handleToastMessage}
							/>

							<PasswordChange updateToastMessage={handleToastMessage} />
						</div>
					)}
				</div>
			</BasicLayout>
			{toastMessage && (
				<div className='fixed bottom-[2%] flex h-12 w-[100%] justify-center'>
					<div className='mb-4 mr-4 h-12 w-96 rounded-xl bg-gray3 px-4 py-2 text-center text-xl font-semibold text-violet2'>
						<span>{toastMessage}</span>
					</div>
				</div>
			)}
		</>
	);
}
