export const inputClassNames = {
	inputContainer:
		'relative flex items-center gap-[10px] rounded-md border border-solid border-gray3 bg-white px-4 py-[14px] text-base font-normal focus-within:outline-none focus-within:ring-[1px] focus-within:ring-violet2',
	dropdownContainer:
		'relative rounded-md border border-solid border-gray3 bg-white focus-within:outline-none focus-within:ring-[1px] focus-within:ring-violet2',
	dropdownOptions:
		'absolute z-10 mt-0.5 flex w-[217px] flex-col rounded-md border border-solid border-gray3 bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.8)]',
	label: 'text-lg font-medium',
	// 사이즈를 결정하는 키워드
	type: {
		dropdown: 'h-12 w-[217px]',
		input: 'h-12 w-[450px]',
		textarea: 'min-h-[110px] w-[450px] sm:w-[287px]',
	},
};
