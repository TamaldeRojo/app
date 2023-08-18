import React from 'react'
import {useTranslation} from "react-i18next"

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
    const [t,i18n] = useTranslation("global");
  return (
    <div className='hidden menu absolute md:flex md:static md:items-center md:opacity-100 opacity-0' >
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}><a href=''>{t("header.inicio")}</a></li>
            <li className={liStyle}><a href='#body2'>{t("header.info")}</a></li>
            <li className={liStyle}><a href='#precio'>{t("header.precio")}</a></li>
            <li className={liStyle}><a href='#us'>{t("header.nosotros")}</a></li>
        </ul>
        
    </div>
  )
}

export default CenterMenu