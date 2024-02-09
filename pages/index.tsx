import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Footer from '@/src/components/landing/Footer';
import LandingHeader from '@/src/components/landing/LandingHeader';
import LandingMain from '@/src/components/landing/LandingMain';
import DarkModeButton from '@/src/components/ui/Button/DarkModeButton';
import { useGetDashboardList } from '@/src/hooks/dashboard/useGetDashboardList';
import { useGetMe } from '@/src/hooks/myPage/useGetMe';

export default function Home() {
	const { userInfo } = useGetMe();
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	const [renderDelayedContent, setRenderDelayedContent] = useState(false);
	const { dashboardListInfo } = useGetDashboardList(
		'pagination',
		0,
		1,
		1,
		false,
	);
	useEffect(() => {
		const fetchData = async () => {
			if (userInfo) {
				try {
					await router.push(
						`/dashboard/${dashboardListInfo?.dashboards[0].id}`,
					);
				} catch (error) {
					console.error('라우팅 중 오류가 발생했습니다:', error);
				}
			}
			setTheme('light');
			setRenderDelayedContent(true);
		};

		// fetchData 함수를 0.4초 후에 호출
		const timer = setTimeout(fetchData, 500);

		// 컴포넌트가 언마운트될 때 타이머 클리어
		return () => clearTimeout(timer);
	}, [userInfo]);

	const handleDarkModeClick = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	// fetchData 함수가 호출되기 전에는 아무 것도 렌더링하지 않음
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
