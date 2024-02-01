import React from 'react';

import MemberTable from '@/src/components/ui/Table/MemberTable';
export default function Page() {
	return (
		<div className='flex flex-col gap-6 p-1'>
			<MemberTable label={'구성원'} />
			<MemberTable label={'초대 내역'} isInvite />
		</div>
	);
}
