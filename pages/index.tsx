import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Footer from '@/src/components/landing/Footer';
import LandingHeader from '@/src/components/landing/LandingHeader';
import LandingMain from '@/src/components/landing/LandingMain';
import DarkModeButton from '@/src/components/ui/Button/DarkModeButton';
import { useGetMe } from '@/src/hooks/myPage/useGetMe';

export default function Home() {
	const { userInfo, execute } = useGetMe();
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	const [renderDelayedContent, setRenderDelayedContent] = useState(false);
	//컴퓨터 문제인지 몰라도 userInfo확인하고 토큰 인터셉트로 로그인 확인하는 부분인데
	//자꾸 기본화면이 render가 되고  router.push('/mydashboard')동작해서 화면을 0.4초 느리게 render가 되어서 설정한것입니다.
	useEffect(() => {
		const fetchData = async () => {
			if (userInfo) {
				try {
					await router.push('/mydashboard');
				} catch (error) {
					console.error('라우팅 중 오류가 발생했습니다:', error);
				}
			}
			setTheme('light');
			setRenderDelayedContent(true);
		};
		// 0.4초 후에 fetchData를 호출합니다.
		const timer = setTimeout(fetchData, 400);
		// 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
		return () => clearTimeout(timer);
	}, [userInfo]);

	const handleDarkModeClick = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	// fetchData가 실행되기 전에는 아무것도 렌더링하지 않습니다.
	if (!renderDelayedContent) {
		return null;
	}

	return (
		<>
			<LandingHeader theme={theme} />
			<LandingMain />
			<Footer theme={theme} />
			<DarkModeButton theme={theme} onClick={handleDarkModeClick} />
		</>
	);
}
