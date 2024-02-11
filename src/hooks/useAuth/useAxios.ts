import { AxiosError, AxiosResponse, Method } from 'axios';
import { useEffect, useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';

interface UseAxiosParams<P> {
	path: string;
	method: Method;
	payload?: P;
}

export const useAxios = <T, P = null, E = unknown>(
	{ path = '', method = 'GET', payload }: UseAxiosParams<P>,
	lazyMode: boolean = false,
) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError<E> | null>(null);
	const [data, setData] = useState<T | null>(null);

	const execute = async ({
		newPath = path,
		newMethod = method,
		newPayload = payload,
	} = {}) => {
		setLoading(true);
		setError(null);
		setData(null);
		try {
			const response: AxiosResponse<T> = await axiosInstance({
				method: newMethod,
				url: newPath,
				data: newPayload,
			});
			setData(response?.data ?? null);
			return response;
		} catch (error) {
			setError(error as AxiosError<E>);
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
