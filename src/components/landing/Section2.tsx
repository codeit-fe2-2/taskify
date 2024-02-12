import Image from 'next/image';
import React from 'react';

export default function Section2() {
	return (
		<>
			<div className='flex w-[1200px] justify-between rounded-lg bg-gray2 dark:bg-black3 sm:w-[343px]  sm:flex-col sm:gap-[194px] md:w-[664px] md:flex-col md:gap-[220px]'>
				<div className='mt-[123px] pl-[60px] sm:mt-[60px] sm:pl-0 sm:text-center md:mt-[63px]'>
					<span className='text-[22px] font-medium leading-6  dark:text-white sm:text-lg'>
						Point 1
					</span>

					<div className='mt-[100px] text-5xl font-bold leading-[64px] dark:text-white sm:mt-[61px] sm:text-4xl  sm:font-medium sm:leading-[50px]'>
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
			<div className='flex w-[1200px] rounded-lg bg-gray1 dark:bg-black3 sm:w-[343px]  sm:flex-col-reverse sm:gap-[192px] md:w-[664px]  md:flex-col-reverse md:gap-[240px]'>
				<div className='order-2 mt-[123px] pl-[38px] sm:mt-[60px] sm:pl-0 sm:text-center md:mt-[63px]'>
					<span className='text-[22px] font-medium leading-6   dark:text-gray4 sm:text-lg'>
						Point 2
					</span>

					<div className='mt-[100px] text-5xl font-bold leading-[64px] dark:text-white sm:mt-[61px] sm:text-4xl sm:font-medium sm:leading-[50px]'>
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
}
