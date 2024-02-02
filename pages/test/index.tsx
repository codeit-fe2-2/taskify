import React from 'react';

import Card from '@/src/components/ui/Card';
import Chips from '@/src/components/ui/Chips/Chips';
export default function Page() {
	return (
		<>
			<Card title='제목' tagText='상' hasImage={true} />
			<Chips />
		</>
	);
}
