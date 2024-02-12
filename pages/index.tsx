import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { getDashboardList } from '@/src/apis/dashboard/getDashboardList';
import Footer from '@/src/components/landing/Footer';
import LandingHeader from '@/src/components/landing/LandingHeader';
import LandingMain from '@/src/components/landing/LandingMain';
import DarkModeButton from '@/src/components/ui/Button/DarkModeButton';
import { useAuth } from '@/src/contexts/AuthProvider';

export default function Home() {
	const { user } = useAuth();
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	const [renderDelayedContent, setRenderDelayedContent] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				if (user) {
					const dashboard = await getDashboardList('pagination', 0, 1, 1);
					const dashboardId = dashboard?.dashboards[0]?.id;
					if (dashboardId) {
						void router.push(`/dashboard/${dashboardId}`);
						setLoading(false);
					}
				}
			} catch (error) {
				console.error('Error while fetching data:', error);
			} finally {
				setLoading(false);
			}
			setTheme('light');
			setRenderDelayedContent(true);
		};

		// fetchData 함수를 0.4초 후에 호출
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		const timer = setTimeout(fetchData, 1000);

		// 컴포넌트가 언마운트될 때 타이머 클리어
		return () => clearTimeout(timer);
	}, [user]);

	const handleDarkModeClick = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	// fetchData 함수가 호출되기 전에는 아무 것도 렌더링하지 않음
	if (!renderDelayedContent) {
		return null;
	}

	return (
		<>
			{loading ? (
				<div>loading</div>
			) : (
				<>
					<LandingHeader theme={theme} />
					<LandingMain />
					<Footer theme={theme} />
					<DarkModeButton theme={theme} onClick={handleDarkModeClick} />
				</>
			)}
		</>
	);
}
