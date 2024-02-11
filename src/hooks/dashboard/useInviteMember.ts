import { useRouter } from 'next/router';

import { useAxios } from '@/src/hooks/useAuth/useAxios';

export const useInviteMember = (email: string) => {
	const router = useRouter();
	const { boardid } = router.query;

	const { data, execute, error } = useAxios(
		{
			method: 'POST',
			path: `/dashboards/${boardid as string}/invitations`,
			payload: { email },
		},
		true,
	);

	return { data, execute, error };
};
