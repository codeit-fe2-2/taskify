import React from "react";




export default function ModalButton (){
  return (<>
    <div>
      <button className="border border-1 border-gray3 rounded-sm gap-10 px-8 py-2 text-violet2 text-xs">입력</button>
    </div>

    <div className="">
      <button className="border border-gray3 border-1 bg-white rounded-md h-12 w-48 px-4.6 py-7 text-gray5 text-sm flex justify-center items-center">취소</button>
      
      <button className="border border-w-1  bg-violet2 rounded-md h-12 w-48 px-23 py-7 text-white text-sm flex justify-center items-center">확인</button>
    </div>
  </>)
}

