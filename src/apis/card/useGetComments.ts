import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { CommentListData } from '@/src/types/card';

export const useGetCommentList = (
	size: number,
	cardId: number,
	cursorId?: number | null,
) => {
	const getCommentList = () =>
		axiosInstance.get<CommentListData>(
			`/comments?size=${size}${cursorId ? `&cursorId=${cursorId}` : ''}&cardId=${cardId}`,
		);

	const { data, execute, error } = useAsync(getCommentList);

	return { commentListInfo: data, execute, error };
};
