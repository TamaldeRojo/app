import React from 'react'
import {useTranslation} from "react-i18next"

function Body() {
    const buttonStyle = 'hover:text-white text-[13px] flex border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] hover:bg-[#232A4E] mr-[35px]'
    const [t] = useTranslation("global");
  return (
    <div className='wrapper bg-[#F1F2F6] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]'>
        {/* left */}
        
        <div className='heading flex flex-col items-start justify-center h-[100%] text-[3rem]'>
            <span className='text-[28px] md:text-[64px]'>{t("body.content1")}</span>
            <span className='text-[28px] md:text-[48px]'><b>{t("body.content2")}</b></span>
            <span className='text-[15px] text-[#525D6E]'>
                {t("body.desc")}
            </span>
            <div>
                <span className='md:text-[13px] text-[10px]'>{t("body.devices")}</span>
                <button className={buttonStyle} src>
                   <a href=''> {t("body.download")}</a>
                </button>
            </div>
        </div>
        {/* right */}
        <div className='images'>
            <img src={require("../imgs/p1.png")} alt='' className='h-[15rem] w-[15rem] ml-[2.8rem] md:h-[32rem] md:mr-[5rem]'/>
        </div>


    </div>
  )
}

export default Body