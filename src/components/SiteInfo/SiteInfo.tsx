import React from 'react'
import SiteInfoRow from '../SiteInfoRow/SiteInfoRow'
import { getClassName, Styleable } from '../utils/utils'
import './style.css'

export interface SiteInfoProps extends Styleable{
}
export default function SiteInfo(props: SiteInfoProps) {
  return (
    <div className={getClassName('siteInfo', props)} style={props.style}>
      <div className="siteInfo-title">Lolita Mercedes</div>
      <div className="siteInfo-container">
        <SiteInfoRow text="ASD" value="10" valueFirst valueSize={30} textSize={20}/>
        <SiteInfoRow text="ASD" value="10" valueSize={30} textSize={20}/>
      </div>
    </div>
  )
}
