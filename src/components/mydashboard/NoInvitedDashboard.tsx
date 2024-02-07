import Image from 'next/image';

export default function NoInvitedDashboard() {
	return (
		<div className='mt-10 h-[400px] rounded-lg bg-white px-7 py-8 sm:mt-6'>
			<span className='text-2xl font-bold sm:text-xl'>초대받은 대시보드</span>
			<div className='mt-[66px] flex flex-col items-center'>
				<Image
					src={'/icons/unsubscribe.svg'}
					alt=''
					width={100}
					height={100}
					className='sm:size-[60px]'
					priority
				/>
				<span className='text-lg text-gray4 sm:text-base'>
					아직 초대받은 대시보드가 없어요
				</span>
			</div>
		</div>
	);
}
