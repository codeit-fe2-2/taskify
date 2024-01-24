import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { fontPretendard } from '@/styles/fonts';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={fontPretendard.className}>
			<Component {...pageProps} />
		</main>
	);
}
