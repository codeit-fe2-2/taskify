import GeneralButton from '@/src/components/ui/GeneralButton';

export default function Page() {
	const handleLoginClick = () => {
		console.log('테슷흐입니다.');
	};
	return (
		<>
			<div className='font-bold text-orange'>테스트 페이지!</div>
			<GeneralButton onClick={handleLoginClick}>로그인</GeneralButton>
		</>
	);
}
