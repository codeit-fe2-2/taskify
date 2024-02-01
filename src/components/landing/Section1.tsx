import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Section1: React.FC = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center pt-[94px] sm:pt-[42px]'>
			<Image
				src='/images/landing_hero.png'
				width={722}
				height={428}
				alt='landing_hero.png'
				className='sm:h-[168px] sm:w-[287px] md:h-[314.76px] md:w-[537.25px]'
			/>

			<div className='font-Pretendard mt-[48.24px] flex items-center gap-7 font-bold sm:mt-[26px] sm:flex-col sm:gap-[5px] md:gap-6'>
				<span className='letter-spacing-[-2px] text-[76px] leading-[100px] sm:text-[40px] sm:leading-[48px] md:text-[56px] dark:text-white'>
					새로운 일정 관리
				</span>
				<span className='letter-spacing-[-1px] text-violet2 text-[90px] leading-[65px] sm:text-[42px] sm:leading-[51px] md:text-[70px]'>
					Taskify
				</span>
			</div>

			<span className='font-Pretendard letter-spacing-[-1px] mt-6 text-lg leading-5 sm:mt-[18px] sm:text-xs md:text-base md:leading-4 dark:text-white'>
				서비스의 메인 설명 들어갑니다.
			</span>

			<Link
				href='/login'
				className='bg-violet2 font-Pretendard mt-[66px] rounded-lg px-[101px] py-[14.5px] text-lg font-medium leading-6 text-[white] sm:mt-[70px] sm:px-[87px] sm:py-[12.5px] sm:text-sm sm:leading-4 md:px-[105px] md:py-[15.5px] md:text-base md:leading-5'
			>
				로그인하기
			</Link>
		</div>
	);
};

export default Section1;
