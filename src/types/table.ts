export interface InviteDash {
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

export interface InviteList {
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
	data: InviteList[];
}

export interface Members {
	members: [
		{
			id: number;
			email: string;
			nickname: string;
			profileImageUrl: string;
			createdAt: string;
			updatedAt: string;
			isOwner: true;
			userId: number;
		},
	];
	totalCount: number;
}

export interface MembersResponse {
	totalCount: number;
	data: Members[];
}
