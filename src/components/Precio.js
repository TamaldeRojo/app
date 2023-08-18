import React from 'react'
import {useTranslation} from "react-i18next"

function Precio() {
    const [t] = useTranslation("global");
    
  return (
    <div className="precio flex flex-row gap-[15%] md:gap-[20%] items-center justify-start px-[2rem] md:px-[5rem] bg-[#758BFD] 
    h-[60rem] pt-[18rem] mt-[-15rem] relative z-[1] rounded-b-[5rem]" id='precio'> 
        
        <div className='md:right flex flex-col md:justify-center md:text-[3rem]'>
            <span className='text-[30px]'>{t("pricing.title")}</span>
        </div>
    </div>
  )
}

export default Precio