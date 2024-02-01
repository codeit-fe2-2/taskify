import Image from 'next/image';
import React from 'react';
interface HeaderProps {
	theme?: string;
	onClick?: () => void;
}
const DarkModeButton = ({ theme, onClick }: HeaderProps) => {
	return (
		<button
			onClick={onClick}
			className='fixed bottom-[8%] right-[4%]  focus:outline-none'
			style={{
				transform: theme === 'dark' ? 'rotate(360deg)' : 'none',
				transitionDuration: '0.5s',
			}}
		>
			{theme === 'dark' ? (
				<Image
					src='/icons/moon.svg'
					alt='Light Mode'
					width={30}
					height={30}
					style={{ filter: 'invert(100%)' }}
				/>
			) : (
				<Image src='/icons/sun.svg' alt='Dark Mode' width={30} height={30} />
			)}
		</button>
	);
};

export default DarkModeButton;
