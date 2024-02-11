import { useState } from 'react';

const usePostCardInput = (initialValue: string) => {
	const [value, setValue] = useState<string>(initialValue);

	const handleChange = (value: string[]) => {
		setValue(value[0]);
	};

	return { value, onChange: handleChange };
};

export default usePostCardInput;
