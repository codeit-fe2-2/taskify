import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { fontPretendard } from '@/styles/fonts';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Taskify</title>
			</Head>
			<div className={fontPretendard.className}>
				<Component {...pageProps} />
			</div>
		</>
	);
}
