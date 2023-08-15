import React from 'react'
import {useTranslation} from "react-i18next"
import CenterMenu from './CenterMenu';
import { useState } from "react";

function Header() {
    const [t,i18n] = useTranslation("global");
    const buttonStyle = 'hover:text-white border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] hover:bg-[#232A4E] mr-[35px]'
    const [openModal, setopenModal] = useState(false)

  return (
    <>
    <div className='header bg-[#F1F2F6] flex items-center justify-between px-[0.5rem] md:px-[5rem] py-[1rem] text-[0.8rem]'>
      <img className='logo  w-[50px] h-[50px] md:w-[60px] md:h-[60px]' src={require("../imgs/logo.png")} alt=''/>
      <CenterMenu/>
      <div className='translate flex'>
          <button 
            className={buttonStyle} 
            onClick={()=>setopenModal((prev)=>!prev)}>
            {t("header.idioma")}
          </button>
          {
              openModal && (
                <div className='dropDown z-[5] absolute top-[4.5rem] right-[2.8rem] md:right-[6rem] w-[120px] text-black p-[15px] rounded-xl bg-white'>
                  <button className='flex mb-[10px] ' onClick={()=>i18n.changeLanguage('es')}>🇲🇽 Español</button>
                  <button className='flex mb-[10px] ' onClick={()=>i18n.changeLanguage('en')}>🇺🇸 English</button>
                  <button className='flex mb-[10px] ' onClick={()=>i18n.changeLanguage('fr')}>🇫🇷 Français</button>
                  <button className='flex mb-[10px] ' onClick={()=>i18n.changeLanguage('gr')}>🇩🇪 Deutsch</button>
                </div>
              )
            }
     
      </div>
    </div>
    </>
  )
}

export default Header


