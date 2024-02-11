import Image from 'next/image';
import Link from 'next/link';
interface HeaderProps {
	theme?: string;
}
const LandingHeader = ({ theme }: HeaderProps) => {
	const darkMode = theme === 'dark';
	const logoSrc = darkMode ? '/icons/logoDark.svg' : '/icons/logo.svg';
	const taskifySrc = darkMode ? '/icons/taskifyDark.svg' : '/icons/taskify.svg';
	return (
		<div className='flex h-[70px]  w-full items-center justify-between border-b border-gray3 text-lg dark:border-none sm:h-[60px] sm:text-[16px]'>
			<Link href='/' className='ml-4 flex sm:ml-6'>
				<Image
					src={logoSrc}
					alt='logo'
					width={35}
					height={35}
					className='sm:h-[27px] sm:w-[24px]'
				/>
				<Image
					src={taskifySrc}
					alt='Taskify'
					width={80}
					height={22}
					className='sm:hidden'
				/>
			</Link>

			<div className='mr-6 flex gap-6 text-black2 md:mr-10  lg:mr-20'>
				<Link href='/login' className='dark:text-white'>
					로그인
				</Link>
				<Link href='/signup' className=' dark:text-white'>
					회원가입
				</Link>
			</div>
		</div>
	);
};

export default LandingHeader;
