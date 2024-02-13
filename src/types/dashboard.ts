export interface Dashboard {
	id: number;
	title: string;
	color: string;
	createdAt: string;
	updatedAt: string;
	createdByMe: boolean;
	userId: number;
}

export interface DashboardListGetResponse {
	dashboards: Dashboard[];
	cursorId: number;
	totalCount: number;
}

export interface Column {
	id: number;
	title: string;
	teamId: string;
	createdAt: string;
	updatedAt: string;
}

export interface ColumnListGetResponse {
	result: string;
	data: Column[];
}

export interface DashboardPostResponse {
	title: string;
	dashboardId: number;
}
export interface ColumnModifyPutResponse {
	title: string;
	columnId: number;
}

export interface InvitationsPostResponse {
	id: number;
	inviter: Invite;
	teamId: string;
	dashboard: {
		title: string;
		id: number;
	};
	invitee: Invite;
	inviteAccepted?: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface Invite {
	nickname: string;
	email: string;
	id: number;
}
