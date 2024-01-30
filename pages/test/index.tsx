import React, { useState } from 'react';

import ModalDropdown from '@/src/components/ui/ModalInput/ModalDropdown';
import ModalInput from '@/src/components/ui/ModalInput/ModalInput';
import ModalTextareaInput from '@/src/components/ui/ModalInput/ModalTextareaInput';

export default function Page() {
	// Tag 때문에 타입을 string[]으로 지정함
	const [values, setValues] = useState<string[]>([]);

	const handleValuesChange = (newValues: string[]) => {
		setValues(newValues);
	};

	return (
		<>
			<p>{values}</p>
			<ModalInput label='제목' onValuesChange={handleValuesChange} />
			<br />
			<ModalInput label='마감일' onValuesChange={handleValuesChange} />
			<br />
			<ModalInput label='태그' onValuesChange={handleValuesChange} />
			<br />
			<ModalDropdown label='상태' />
			<br />
			<ModalDropdown label='담당자' />
			<br />
			<ModalTextareaInput label='댓글' onValuesChange={handleValuesChange} />
		</>
	);
}
