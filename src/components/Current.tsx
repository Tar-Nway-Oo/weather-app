import { iconMap } from "../iconMap"
import "../index.css"

export type CurrentObj = {
   currentTemp: number
    apparentTemp: number
    windSpeed: number
    precip: number,
    weatherCode: number
}

type CurrentProps = {
   current: CurrentObj
}

export default function Current({current}: CurrentProps) {

  const {weatherCode, currentTemp, apparentTemp, windSpeed, precip} = current;

  return (
    <div className="curr-container">
      <div className="curr-weather">
        <img src={`./assets/${iconMap.get(weatherCode)}.svg`} alt={iconMap.get(weatherCode)} className="curr-img" />
      </div>
      <div className="curr-status">
         <div>
            <p>TEMP</p>
            <p>{currentTemp}<span className="symbol">&deg;C</span></p>
         </div>
         <div>
            <p>FL TEMP</p>
            <p>{apparentTemp}<span className="symbol">&deg;C</span></p>
         </div>
         <div>
            <p>WIND</p>
            <p>{windSpeed} <span className="symbol">mph</span></p>
         </div>
         <div>
            <p>PRECIP</p>
            <p>{precip} <span className="symbol">in</span></p>
         </div>
      </div>
    </div>
  )
}
