import React from 'react'
import {useTranslation} from "react-i18next"

function Body2() {
  const [t] = useTranslation("global");
  return (
    <div className="body2 flex flex-col items-center justify-start px-[5rem] bg-[#AEB8FE] 
    h-[90rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]" id='body2'>
      {/* titld icon */}
      <img src={require("../imgs/logo.png")} alt="" className="w-[10rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>{t("body2.title1")}</span>
        <span>
          <b>{t("body2.title2")}</b>
        </span>
      </div>
      <img className='mt-[1rem]' alt='' src='https://camo.githubusercontent.com/e1ac1f6f369d41ea9de9d21bc74f9de89c2ed892d9bcc2554acac8041fa571d6/68747470733a2f2f6d65646961706970652e6465762f696d616765732f6d6f62696c652f706f73655f747261636b696e675f6578616d706c652e676966'/>
     
    </div>
  )
}

export default Body2