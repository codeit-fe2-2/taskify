import { useEffect } from 'react';

import { useAuth } from '@/src/contexts/AuthProvider';
import { PostLoginRequestConfigs, PostLoginResponse } from '@/src/types/auth';

import { useAxios } from './useAxios';

export const usePostLogin = (payload = { email: '', password: '' }) => {
	const { setUser } = useAuth();
	const requstConfigs = {
		path: '/users',
		method: 'POST' as const,
		payload,
	};
	const { data, error, execute } = useAxios<
		PostLoginResponse,
		PostLoginRequestConfigs
	>(requstConfigs, true);

	useEffect(() => {
		if (data) {
			setUser(data.user);
			localStorage.setItem('accessToken', data.accessToken);
		}
	}, [data]);

	return { data, error, execute };
};
