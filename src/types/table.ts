interface InviteDash {
	id: number;
	inviter: {
		id: number;
		email: string;
		nickname: string;
	};
	teamId: string;
	dashboard: {
		id: number;
		title: string;
	};
	invitee: {
		id: number;
		email: string;
		nickname: string;
	};
	inviteAccepted: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface InviteDashGetResponse {
	invitations: InviteDash[];
	cursorId: number;
}

export interface InviteDashPutResponse {
	invitations: InviteDash[];
}

interface InviteList {
	id: number;
	inviter: {
		id: number;
		email: string;
		nickname: string;
	};
	teamId: string;
	dashboard: {
		id: number;
		title: string;
	};
	invitee: {
		id: number;
		email: string;
		nickname: string;
	};
	inviteAccepted: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface InviteListGetResponse {
	totalCount: number;
	invitations: InviteList[];
}

interface Members {
	id: number;
	email: string;
	nickname: string;
	profileImageUrl: string;
	createdAt: string;
	updatedAt: string;
	isOwner: true;
	userId: number;
}

export interface MembersResponse {
	members: Members[];
	totalCount: number;
}
