export interface Invitedash {
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

export interface InvitedashGetResponse {
	data: Invitedash[];
	cursorId: number;
}
