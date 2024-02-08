import { RefObject, useEffect } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAuth } from '@/src/contexts/AuthProvider';
import { useAsync } from '@/src/hooks/useAsync';
import { PostLoginResponse } from '@/src/types/auth';

export const usePostLogin = (formRef: RefObject<HTMLFormElement>) => {
	const { setUser } = useAuth();
	const postLog = () => {
		const formData = new FormData(formRef.current as HTMLFormElement);
		const email = formData.get('email');
		const password = formData.get('password');
		return axiosInstance.post<PostLoginResponse>('/auth/login', {
			email: email,
			password: password,
		});
	};

	const { data, error, execute } = useAsync(postLog, true);

	useEffect(() => {
		if (data) {
			setUser(data.user);
			localStorage.setItem('accessToken', data.accessToken);
		}
	}, [data]);

	return { data, error, execute };
};
