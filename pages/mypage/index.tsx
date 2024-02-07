import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import BasicLayout from '@/src/components/layout/BasicLayout';
import PasswordChange from '@/src/components/mypage/PasswordChange';
import ProfileChange from '@/src/components/mypage/ProfileChange';
import TextButton from '@/src/components/ui/Button/TextButton';
import { useGetMe } from '@/src/hooks/myPage/useGetMe';
export default function Page() {
	const { userInfo, execute } = useGetMe();
	const [toastMessage, setToastMessage] = useState<string>('');
	const router = useRouter();
	const handleToastMessage = (message: string) => {
		setToastMessage(message);
	};
	//toast메시지가 3초있다가 사라지게 하는 설정
	useEffect(() => {
		if (toastMessage) {
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
				<div className='fixed bottom-[2%] left-[40%] mb-4 mr-4 w-80 rounded-xl bg-black2 bg-opacity-70 px-4 py-2 text-center text-green'>
					<span> {toastMessage}</span>
				</div>
			)}
		</>
	);
}
