import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

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
