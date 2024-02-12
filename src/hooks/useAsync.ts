import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

// 이 친구를 직접 건드려서 execute에 props을 받도록 수정하는 게 베스트
export const useAsync = <T>(
	asyncFunction: () => Promise<AxiosResponse<T>>,
	lazyMode: boolean = false,
) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState<null | T>(null);

	const execute = async () => {
		setLoading(true);
		setError(null);
		setData(null);
		try {
			const response = await asyncFunction();
			setData(response?.data ?? null);
			return response;
		} catch (error: unknown) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (!lazyMode) {
			void execute();
		}
	}, [lazyMode]);

	return { execute, loading, error, data };
};
// useAsync(useQuery)는 get에만 쓰고, 그 외의 경우에 쓰는 useMutation 만들어서 사용하기
