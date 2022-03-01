import { SyntheticEvent, useState } from "react";

import data from '../data.json';

import './App.scss';

import jeremy from './images/image-jeremy.png';
import ellipsis from './images/icon-ellipsis.svg';


export function App() {

  const [value, setValue] = useState('');
  const [first, setFirst] = useState(true);

  const daily = data.map(e => {
    const title = e.title.replace(/ /g, "");

    return (
      <div className={`main_content ${title}`}>
        <div className={`${title}_img`} />
        <div className="main_content_wrapper">
          <div className="main_content_wrapper_first">
            <h2>{e.title}</h2>
            <img src={ellipsis} alt="ellipsis"/>
          </div>
          <div className="main_content_wrapper_second">
            <p className="hrs">{e.timeframes.daily.current}hrs</p>
            <p>Last Week - {e.timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
    )
  })

  const weekly = data.map(e => {
    const title = e.title.replace(/ /g, "");

    return (
      <div className={`main_content ${title}`}>
        <div className={`${title}_img`} />
        <div className="main_content_wrapper">
          <div className="main_content_wrapper_first">
            <h2>{e.title}</h2>
            <img src={ellipsis} alt="ellipsis"/>
          </div>
          <div className="main_content_wrapper_second">
            <p className="hrs">{e.timeframes.weekly.current}hrs</p>
            <p>Last Week - {e.timeframes.weekly.previous}</p>
          </div>
        </div>
      </div>
    )
  })

  const monthly = data.map(e => {
    const title = e.title.replace(/ /g, "");

    return (
      <div className={`main_content ${title}`}>
        <div className={`${title}_img`} />
        <div className="main_content_wrapper">
          <div className="main_content_wrapper_first">
            <h2>{e.title}</h2>
            <img src={ellipsis} alt="ellipsis"/>
          </div>
          <div className="main_content_wrapper_second">
            <p className="hrs">{e.timeframes.monthly.current}hrs</p>
            <p>Last Week - {e.timeframes.monthly.previous}</p>
          </div>
        </div>
      </div>
    )
  })

  const Render = () => {
    if (value === 'daily') return daily
    else if (value === 'weekly') return weekly
    else if (value === 'monthly') return monthly
  }


  const handleClick = (event: SyntheticEvent) => {
    setValue(event.currentTarget.id)
    setFirst(false);
  }

  return (
    <>
      <header className="header">
        <div className="header_profile">
          <img src={jeremy} alt="jeremy" />
          <div className="header_profile_text">
            <span>Report for</span>
            <strong>Jeremy Robson</strong>
          </div>
        </div>
        <div className="header_button">
          <button 
            id="daily" 
            onClick={handleClick}>Daily</button>
          <button 
            id="weekly" 
            onClick={handleClick}>Weekly</button>
          <button 
            id="monthly" 
            onClick={handleClick}>Monthly</button>
        </div>
      </header>
      <main className="main">
        { first ? daily : Render() }
      </main>
    </>
  )

}
