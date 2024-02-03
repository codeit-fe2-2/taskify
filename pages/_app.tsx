import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import { ModalProvider } from '@/src/contexts/ModalProvider';
import { fontPretendard } from '@/styles/fonts';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Taskify</title>
			</Head>
			<ThemeProvider attribute='class'>
				<ModalProvider>
					<div className={fontPretendard.className}>
						<Component {...pageProps} />
					</div>
				</ModalProvider>
			</ThemeProvider>
		</>
	);
}
