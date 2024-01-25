import localFont from 'next/font/local';

export const fontPretendard = localFont({
	src: [
		{
			path: '../static/fonts/Pretendard-Regular.subset.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../static/fonts/Pretendard-Medium.subset.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../static/fonts/Pretendard-SemiBold.subset.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../static/fonts/Pretendard-Bold.subset.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-pretendard',
});
