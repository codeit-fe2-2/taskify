export interface User {
	id: number;
	email: string;
	nickname: string;
	profileImageUrl: string;
	createdAt: string;
	updatedAt: string;
}

export interface Member extends User {
	userId: number;
	isOwner: boolean;
}
