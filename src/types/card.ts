export interface Assignee {
	profileImageUrl: string;
	nickname: string;
	id: number;
}

export interface Card {
	id: number;
	title: string;
	description: string;
	tags: string[];
	dueDate: string;
	assignee: Assignee;
	imageUrl: string;
	teamId: string;
	dashboardId: number;
	columnId: number;
	createdAt: string;
	updatedAt: string;
}
export interface CardListData {
	cards: Card[];
	cursorId: number | null;
	totalCount: number;
}

export interface Author {
	profileImageUrl: string;
	nickname: string;
	id: number;
}
export interface Comment {
	id: number;
	content: string;
	createdAt: string;
	updatedAt: string;
	cardId: number;
	author: Author;
}
export interface CommentListData {
	cursorId: number | null;
	comments: Comment[];
}
