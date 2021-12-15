import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon';
import { getClassName, Styleable } from '../utils/utils';
import './style.css'

export interface MostVisitedItem {
  rid: number;
  faviconUrl: string;
}
export interface MostVisitedProps extends Styleable {

}
export default function MostVisited(props: MostVisitedProps) {
  const [mostVisitedSites, setMostVisitedSites] = useState<MostVisitedItem[]>([]);

  function getMostVisitedSites() {
    try {
      const mostVisited = (window as any).chrome.embeddedSearch.newTabPage.mostVisited as MostVisitedItem[];
      setMostVisitedSites(mostVisited);
    } catch (error) { }
  }

  function handleRemoveMostVisitedSite(item: MostVisitedItem) {
    try {
      (window as any).chrome.embeddedSearch.newTabPage.deleteMostVisitedItem(item.rid);
    } catch (error) {
      
    }
  }

  // Load most visited sites
  useEffect(() => {
    if((window as any).chrome instanceof Object) {
      if((window as any).chrome.embeddedSearch instanceof Object) {
        try {
          getMostVisitedSites();
          (window as any).chrome.embeddedSearch.newTabPage.onmostvisitedchange = getMostVisitedSites;
        } catch (error) { }
      }
    }
  }, []);

  function renderItem(item: MostVisitedItem) {
    const url = `chrome-search://most-visited/title.html?rid=${item.rid}&f=mulish&c=FFFFFFFF`;
    return (
      <div className="mostVisitedItem">
        <iframe src={url + "&fs=0"} title={`most-visited-item-${item.rid}`} className="mostVisitedItemFrame" />
        <Icon src={item.faviconUrl} className="mostVisitedItemIcon"/>
        <iframe src={url + "&fs=14"} title={`most-visited-item-${item.rid}`}/>
        <Icon
          src={require("../../assets/icons/Close icon.svg").default}
          className="mostVisitedItemCloseIcon"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveMostVisitedSite(item)
          }}
        />
      </div>
    );
  }

  function renderMostVisitedSites() {
    // return mostVisitedSites.map(item=> renderItem(item));
    const item = (
      <div className="mostVisitedItem">
        <Icon src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fgithub-icon-logo-png-transparent.png&f=1&nofb=1"} className="mostVisitedItemIcon"/>
        <div className="mostVisitedItemFrame">asd</div>
      </div>
    );
    return Array(4).fill(item);
  }

  return (
    <div className={getClassName("mostVisited", props)} style={props.style}>
      {renderMostVisitedSites()}
    </div>
  )
}
