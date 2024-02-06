import { dayFormatter } from "./Daily"
import { iconMap } from "../iconMap"
import "../index.css"

export type HourlyObj = {
      apparentTemp: number
      temp: number
      weatherCode: number
      windSpeed: number
      precip: number
      time: number
}

type HourlyProps = {
   hourly: HourlyObj[]
}

const hourFormatter = new Intl.DateTimeFormat(undefined, {hour: "numeric"});

export default function Hourly({hourly}: HourlyProps) {
  return (
    <div>
      <table className="hourly-table">
         <tbody>
            {hourly.map(hour => {
               return (
                  <tr className="hourly-row" key={hour.time}>
               <td>
                  <p className="row-day">{dayFormatter.format(hour.time)}</p>
                  <p>{hourFormatter.format(hour.time)}</p>
               </td>
               <td>
               <img src={`./assets/${iconMap.get(hour.weatherCode)}.svg`} alt={iconMap.get(hour.weatherCode)} className="row-img" />
               </td>
               <td>
                  <p>TEMP</p>
                  <p>{hour.temp}<span className="symbol">&deg;C</span></p>
               </td>
               <td>
                  <p>FL TEMP</p>
                  <p>{hour.apparentTemp}<span className="symbol">&deg;C</span></p>
               </td>
               <td>
                  <p>WIND</p>
                  <p>{hour.windSpeed} <span className="symbol">mph</span></p>
               </td>
               <td>
                  <p>PRECIP</p>
                  <p>{hour.precip} <span className="symbol">in</span></p>
               </td>
            </tr>
               )
            })}
            
         </tbody>
      </table>
    </div>
  )
}
