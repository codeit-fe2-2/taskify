import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
	return (
		<div className='mt-[45px] flex w-full flex-col items-center text-[50px] font-medium '>
			<h1>404</h1>
			<div className='relative'>
				<Image
					src='/images/404Bill.webp'
					width={800}
					height={720}
					alt='빌게이츠'
					className='shadow-lg'
				/>
				{/* <div className='absolute bottom-[75px] right-8 h-[180px] w-[250px] rounded-[10px] bg-gray2 text-[40px] sm:bottom-[130px] sm:text-[30px]'>
					<span>없는 페이지</span>
				</div> */}
			</div>

			<p>
				<button className='mt-4 w-[800px] rounded-[20px] border-[1px] border-solid p-2 text-[40px] hover:bg-sortTextBgBlue'>
					<Link href='/' className=''>
						돌아가기
					</Link>
				</button>
			</p>
		</div>
	);
}
