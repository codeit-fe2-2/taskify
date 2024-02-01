import { useState } from 'react';

import InvitedashTable from '@/src/components/ui/Table/InvitedashTable';
import InvitelistTable from '@/src/components/ui/Table/InvitelistTable';
import TableLayer from '@/src/components/ui/Table/TableLayer';

import invitedash from './invitedash.json';
import mockupData from './mockup.json';

export default function Page() {
	const membersData = mockupData.members.map((member) => ({
		id: member.id,
		nickname: member.nickname,
		profileImageUrl: member.profileImageUrl,
		isOwner: member.isOwner,
	}));

	const invitelistData = mockupData.invitations.map((invitation) => ({
		id: invitation.id,
		inviteeEmail: invitation.invitee.email,
	}));

	const invitedashData = invitedash.invitations.map((invitation) => ({
		id: invitation.id,
		dashboardTitle: invitation.dashboard.title,
		inviterNickname: invitation.inviter.nickname,
	}));

	return (
		<div className='flex flex-col gap-6 p-1'>
			<TableLayer tableName={'초대 내역'} needPage isInvite>
				<InvitelistTable data={invitelistData} />
			</TableLayer>
			<TableLayer tableName={'초대받은 대시보드'}>
				<InvitedashTable data={invitedashData} />
			</TableLayer>
		</div>
	);
}
