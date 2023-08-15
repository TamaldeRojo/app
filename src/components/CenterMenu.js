import React from 'react'
import {useTranslation} from "react-i18next"

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
    const [t,i18n] = useTranslation("global");
  return (
    <div className='menu absolute md:flex md:static md:items-center md:opacity-100 opacity-0' >
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>{t("header.inicio")}</li>
            <li className={liStyle}>{t("header.info")}</li>
            <li className={liStyle}>{t("header.precio")}</li>
            <li className={liStyle}>{t("header.nosotros")}</li>
        </ul>
        
    </div>
  )
}

export default CenterMenu