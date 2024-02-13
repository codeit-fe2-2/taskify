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
export interface UserProfileImageUpload {
	profileImageUrl: string;
}

export interface UserInfoChange {
	nickname: string;
	profileImageUrl: string;
}
export interface userPasswordChange {
	password: string;
	newPassword: string;
}
