import { PostSignupRequestConfigs } from '@/src/types/auth';
import { User } from '@/src/types/user';

import { useAxios } from './useAxios';

export const usePostSignup = (
	payload = { email: '', nickname: '', password: '' },
) => {
	const { data, error, execute } = useAxios<User, PostSignupRequestConfigs>(
		{ path: '/users', method: 'POST', payload },
		true,
	);

	return { data, error, execute };
};
