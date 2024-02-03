import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import Footer from '@/src/components/landing/Footer';
import LandingHeader from '@/src/components/landing/LandingHeader';
import LandingMain from '@/src/components/landing/LandingMain';
import DarkModeButton from '@/src/components/ui/Button/DarkModeButton';

export default function Home() {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setTheme('light');
	}, []);
	const handleDarkModeClick = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	console.log(theme);
	return (
		<>
			<LandingHeader theme={theme} />
			<LandingMain />
			<Footer theme={theme} />

			<DarkModeButton theme={theme} onClick={handleDarkModeClick} />
		</>
	);
}
