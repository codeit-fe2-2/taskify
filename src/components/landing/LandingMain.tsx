import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

export default function LandingMain() {
	return (
		<div>
			<Section1 />

			<div className='mb-[160px] mt-[184px] flex w-full flex-col items-center justify-center gap-[90px] sm:px-4 md:px-10'>
				<Section2 />

				<p className='mb-[-90px] text-[28px] font-bold leading-8 dark:text-white lg:w-[1200px] '>
					생산성을 높이는 다양한 설정⚡
				</p>
				<div className='mt-[36px] grid gap-[33px] sm:grid-rows-3 sm:gap-[40.5px] md:grid-rows-3 md:gap-[63px] md:px-[183px] lg:grid-cols-3'>
					<Section3
						src='/images/landing3.png'
						alt='landing3'
						height={124}
						padding='lg'
						title='대시보드 설정'
						description='대시보드 사진과 이름을 변경할 수 있어요'
					/>
					<Section3
						src='/images/landing4.png'
						alt='landing4'
						height={231}
						padding='sm'
						title='초대'
						description='새로운 팀원을 초대할 수 있습니다.'
					/>

					<Section3
						src='/images/landing5.png'
						alt='landing5'
						height={196}
						padding='md'
						title='구성원'
						description=' 구성원을 초대하고 내보낼 수 있어요.'
					/>
				</div>
			</div>
		</div>
	);
}
