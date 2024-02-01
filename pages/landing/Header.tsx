import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Header = () => {
	const { theme } = useTheme();
	const darkMode = theme === 'dark';
	const logoSrc = darkMode ? '/logoDark.svg' : '/logo.svg';
	const taskifySrc = darkMode ? '/taskifyDark.svg' : '/taskify.svg';

	return (
		<div className='dark:bg-black flex h-[70px] w-full items-center justify-between border-b border-[#d9d9d9] text-lg sm:h-[60px] sm:text-[16px]'>
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

			<div className='mr-6 flex gap-6 text-[#333236] md:mr-10  lg:mr-20 dark:text-white'>
				<Link href='/login' className=''>
					로그인
				</Link>
				<Link href='/signup' className=''>
					회원가입
				</Link>
			</div>
		</div>
	);
};

export default Header;
