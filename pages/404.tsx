import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
	return (
		<div className='flex w-full flex-col items-center text-[100px] font-bold text-purple'>
			<h1>자,</h1>
			<Image src='/images/404Bill.webp' width={1000} height={920} alt='404' />
			<p>
				<Link href='/'>홈으로 돌아가자</Link>
			</p>
		</div>
	);
}
