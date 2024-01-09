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
  return (
    <div className="curr-container">
      <div className="curr-weather">
        <img src={`./assets/${iconMap.get(current.weatherCode)}.svg`} alt={iconMap.get(current.weatherCode)} className="curr-img" />
      </div>
      <div className="curr-status">
         <div>
            <p>TEMP</p>
            <p>{current.currentTemp}&deg;C</p>
         </div>
         <div>
            <p>FL TEMP</p>
            <p>{current.apparentTemp}&deg;C</p>
         </div>
         <div>
            <p>WIND</p>
            <p>{current.windSpeed} mph</p>
         </div>
         <div>
            <p>PRECIP</p>
            <p>{current.precip} in</p>
         </div>
      </div>
    </div>
  )
}
