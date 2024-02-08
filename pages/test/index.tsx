import React from 'react';

import DefaultProfileImage from '@/src/components/ui/DefaultProfileImage';

export default function Page() {
	const email = 'example@example.com';
	return (
		<div className='flex size-full flex-col gap-6 bg-violet2 p-1'>
			<DefaultProfileImage email={email} classNames='size-[96px] text-[16px]' />
		</div>
	);
}
