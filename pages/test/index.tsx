import { useState } from 'react';

import CardDetails from '@/src/components/ui/Modal/CardDetails';

export default function MyDashboardPage() {
	return (
		<BasicLayout>
			<CardDetails cardId={2784} />
		</BasicLayout>
	);
}
