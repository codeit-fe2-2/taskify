import React from 'react';

interface DefaultProfileImageProps {
	nickname: string;
	classNames: string;
}

export default function DefaultProfileImage({
	nickname,
	classNames, // 텍스트 사이즈와 div 크기는 쓸 때마다 직접 기입 할 것
}: DefaultProfileImageProps): JSX.Element {
	const randomColors = [
		'bg-[#fcdB00]',
		'bg-[#1c1917]',
		'bg-[#a3c4a2]',
		'bg-[#c4b1a2]',
		'bg-[#d25b68]',
		'bg-[#9dd7ed]',
		'bg-[#fdd446]',
		'bg-[#ffc85a]',
		'bg-[#25e09a]',
	];
	const nicknameHash = nickname.charCodeAt(0) % randomColors.length;
	return (
		<>
			<div
				className={`${classNames} ${randomColors[nicknameHash]} flex items-center justify-center rounded-full bg-red font-semibold text-white outline outline-4 outline-offset-0 outline-white`}
			>
				<p>{nickname.charAt(0).toUpperCase()}</p>
			</div>
		</>
	);
}
