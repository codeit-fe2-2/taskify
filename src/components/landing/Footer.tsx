import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
	theme?: string;
}
const Footer = ({ theme }: HeaderProps) => {
	const themeStyle = theme == 'dark' ? {} : { filter: 'invert(90%)' };
	return (
		<div className=' flex h-[100px] w-full items-center justify-between text-base dark:text-white sm:mb-[90px] sm:flex-col sm:items-center sm:text-xs md:px-[40px] lg:pl-[141px] lg:pr-[139px]'>
			<div className='sm:mb-3'>©codeit - 2023</div>
			<div className=' flex gap-8 text-base font-normal leading-5 sm:mb-[68px] sm:gap-5'>
				<span>Privacy Policy</span>
				<span>FAQ</span>
			</div>
			<div className='flex items-center gap-[14px] sm:gap-[20.5px] '>
				<Link href='https://mail.google.com/'>
					<Image
						src='/icons/email.svg'
						height={20}
						width={20}
						alt='email'
						className='sm:h-[15.3px] sm:w-[18.3px]'
						style={themeStyle}
					/>
				</Link>
				<Link href='https://facebook.com/'>
					<Image
						src='/icons/facebook.svg'
						height={20}
						width={20}
						alt='facebook'
						className='sm:size-[17px]'
						style={themeStyle}
					/>
				</Link>
				<Link href='https://instagram.com/'>
					<Image
						src='/icons/instagram.svg'
						height={20}
						width={20}
						alt='instagram'
						className='sm:size-[16.5px]'
						style={themeStyle}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
