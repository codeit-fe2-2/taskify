import Image from 'next/image';
import React from 'react';

const Section2: React.FC = () => {
	return (
		<>
			<div className='bg-gray2  dark:bg-black3 flex w-[1200px] justify-between rounded-lg sm:w-[343px]  sm:flex-col sm:gap-[194px] md:w-[664px] md:flex-col md:gap-[220px]'>
				<div className=' mt-[123px] pl-[60px] sm:mt-[60px] sm:pl-0 sm:text-center md:mt-[63px]'>
					<span className='font-Pretendard text-[22px] font-medium leading-6  sm:text-lg dark:text-white'>
						Point 1
					</span>

					<div className='font-Pretendard mt-[100px] text-5xl font-bold leading-[64px] sm:mt-[61px] sm:text-4xl sm:font-medium  sm:leading-[50px] dark:text-white'>
						<p>
							일의
							<span className='dark:lg:text-gray3'> 우선순위</span>를
						</p>
						<p>관리하세요</p>
					</div>
				</div>

				<div className='flex justify-end lg:mt-[103px]'>
					<Image
						src='/images/landing1.png'
						width={594}
						height={497.5}
						alt='landing1.png'
						className='sm:h-[248px] sm:w-[296px] md:h-[360.5px] md:w-[415px] '
					/>
				</div>
			</div>
			<div className='bg-gray1 dark:bg-black3 flex w-[1200px] rounded-lg sm:w-[343px]  sm:flex-col-reverse sm:gap-[192px] md:w-[664px]  md:flex-col-reverse md:gap-[240px]'>
				<div className='order-2 mt-[123px] pl-[38px] sm:mt-[60px] sm:pl-0 sm:text-center md:mt-[63px]'>
					<span className='font-Pretendard dark:text-gray4 text-[22px] font-medium   leading-6 sm:text-lg'>
						Point 2
					</span>

					<div className='font-Pretendard mt-[100px] text-5xl font-bold leading-[64px] sm:mt-[61px] sm:text-4xl sm:font-medium sm:leading-[50px] dark:text-white'>
						<p>해야 할 일을</p>
						<p>등록하세요</p>
					</div>
				</div>

				<div className='order-1 flex sm:flex sm:justify-center md:mt-0 md:justify-center lg:ml-[108px] lg:mr-[100px] lg:mt-[103px] '>
					<Image
						src='/images/landing2.png'
						width={436}
						height={502}
						alt='landing2.png'
						className='sm:h-[250px] sm:w-[217px] md:h-[415px] md:w-[360px]'
					/>
				</div>
			</div>
		</>
	);
};

export default Section2;
