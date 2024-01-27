import React from "react";
import Image from 'next/image';


export function ColorTags ({text,textColor,bgColor, fontSize }: 
  {
    text: string;
    textColor: string;
    bgColor: string;
    fontSize: string;
}): React.JSX.Element{
  return (
      <div>
        <button className={`${textColor} ${bgColor} ${fontSize <= '10' ? 'text-xs' : 'text-base'} px-3 py-2 rounded-lg text-xs`}>{text}</button>
      </div>
  )
}

enum DotSize {
  Small = 28,
  Medium = 30,
}

export function ColorDots({src,tagName, width, height}: {
  src: string;
  tagName: string;
  width: DotSize;
  height: DotSize
}): React.JSX.Element{
  return (<div>

     <button>
          <Image src={src}
          width={width}
          height={height}
          alt={tagName} />
        </button>
  </div>)
}

enum AddSize {
  Small = 14.5,
  Medium = 16,
}

export function AddButton({width, height}:{
  width: AddSize;
  height: AddSize;
}){
 return (
  <div>
     <br/>

    <button className="flex bg-violet1 p-1 rounded-md"><Image src='/icons/chip_add_sm.svg' 
    width={width}
    height={height}
    alt="chip add"/></button>
  </div>)
}

  export default function Chips() {
  return (
    <div>

    <AddButton width={AddSize.Small} height={AddSize.Small}/>
    <AddButton width={AddSize.Medium} height={AddSize.Medium}/> 

      <br/>
      <div>
        <button className="flex items-center align-middle bg-violet1 rounded-2xl px-2 py-2 gap-x-2 ">

          <Image src='/icons/chip_ellipse_sm_purple.svg'
          width={6} 
          height={6}
          alt="chip dot purple"/> 
          <div className="text-violet2">To do</div>
        
        </button>
      </div>

      <br/>

    {/* 컬러 태그 */}

    <div className="flex gap-4">

     {/* sm */}
      <ColorTags text="프로젝트" textColor="text-sortTextOrange" bgColor="bg-sortTextBgOrange" fontSize='10'/>

      <ColorTags text="일반" textColor="text-sortTextGreen" bgColor="bg-sortTextBgGreen" fontSize='10'/>

      <ColorTags text="백엔드" textColor="text-sortTextPink" bgColor="bg-sortTextBgPink" fontSize='10'/>

      <ColorTags text="상" textColor="text-sortTextBlue" bgColor="bg-sortTextBgBlue" fontSize='10'/>

     {/* md */}
      <ColorTags text="프로젝트" textColor="text-sortTextOrange" bgColor="bg-sortTextBgOrange" fontSize='12'/>

      <ColorTags text="일반" textColor="text-sortTextGreen" bgColor="bg-sortTextBgGreen" fontSize='12'/>

      <ColorTags text="백엔드" textColor="text-sortTextPink" bgColor="bg-sortTextBgPink" fontSize='12'/>

      <ColorTags text="상" textColor="text-sortTextBlue" bgColor="bg-sortTextBgBlue" fontSize='12'/>

    </div>
  

      {/* 색깔 칩 */}

      <br/>

    <div className="flex gap-2">
      {/* sm */}
      <ColorDots tagName="green" src="/icons/chips_ellipse_green.svg" width={DotSize.Small} height={DotSize.Small}/>

      <ColorDots tagName="purple" src="/icons/chips_ellipse_purple.svg" width={DotSize.Small} height={DotSize.Small}/>

      <ColorDots tagName="orange" src="/icons/chips_ellipse_orange.svg" width={DotSize.Small} height={DotSize.Small}/>

      <ColorDots tagName="blue" src="/icons/chips_ellipse_blue.svg" width={DotSize.Small} height={DotSize.Small}/>

      <ColorDots tagName="pink" src="/icons/chips_ellipse_pink.svg" width={DotSize.Small} height={DotSize.Small}/>


      {/* md */}
      <ColorDots tagName="green" src="/icons/chips_ellipse_green.svg" width={DotSize.Medium} height={DotSize.Medium}/>

      <ColorDots tagName="purple" src="/icons/chips_ellipse_purple.svg" width={DotSize.Medium} height={DotSize.Medium}/>

      <ColorDots tagName="orange" src="/icons/chips_ellipse_orange.svg" width={DotSize.Medium} height={DotSize.Medium}/>

      <ColorDots tagName="blue" src="/icons/chips_ellipse_blue.svg" width={DotSize.Medium} height={DotSize.Medium}/>
      
      <ColorDots tagName="pink" src="/icons/chips_ellipse_pink.svg" width={DotSize.Medium} height={DotSize.Medium}/>
    </div>

    </div>
  );
}

