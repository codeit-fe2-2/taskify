import React from 'react';

import DefaultProfileImage from '@/src/components/ui/DefaultProfileImage';

export default function Page() {
	const nickname = '각별님 너무 좋아';
	return (
		<div className='flex size-full flex-col gap-6 bg-violet2 p-1'>
			<DefaultProfileImage
				nickname={nickname}
				classNames='size-[96px] text-[16px]'
			/>
		</div>
	);
}
