import React from 'react'
import {useTranslation} from "react-i18next"

function Precio() {
    const [t] = useTranslation("global");
    
  return (
    <div className="precio flex flex-row gap-[20%] items-center justify-start px-[5rem] bg-[#758BFD] 
    h-[60rem] pt-[18rem] mt-[-15rem] relative z-[1] rounded-b-[5rem]" id='precio'> 
         <div className='md:left md:ml-[13%] '>
         <img src='https://www.arducam.com/wp-content/uploads/2020/02/raspberry-pi-camera-pinout-camera-2.png' 
         className='md:flex absolute md:ml-[-10rem] md:mt-[-10rem] ml-[3.2rem] mt-[6rem] w-[12rem] md:w-[19rem] md:h-[20rem]' alt=''/>
        </div>
        
        <div className='md:right flex flex-col md:justify-center md:text-[3rem] text-[1.8rem]'>
            <span className='text-[40px]'>{t("pricing.title")}</span>
        </div>
    </div>
  )
}

export default Precio