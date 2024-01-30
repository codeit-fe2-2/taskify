export const PAGE_ROUTES = {
	MY_DASHBOARD: '/mydashboard',
	MY_PAGE: '/mypage',
	SIGNUP: '/signup',
	SIGNIN: '/signin',
	DASHBOARD: '/dashboard/',
	DASHBOARD_EDIT: (boardId: number) => `/dashboard/${boardId}/edit`,
};

export const PAGE_NAMES: { [key: string]: string } = {
	'/mydashboard': '내 대시보드',
	'/mypage': '계정관리',
};
