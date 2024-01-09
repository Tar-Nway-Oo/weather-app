import { iconMap } from "../iconMap"
import "../index.css"

export type DailyObj = {
  weatherCode: number
  temp: number
  time: number
}

type DailyProps = {
  daily: DailyObj[]
}

export const dayFormatter = new Intl.DateTimeFormat(undefined, {weekday: "long"});

export default function Daily({daily}: DailyProps) {
  return (
   <div className="card-container">
      {daily.map(day => {
        return(
          <div className="daily-card" key={day.time}>
            <img src={`./assets/${iconMap.get(day.weatherCode)}.svg`} alt={iconMap.get(day.weatherCode)} className="card-img" />
            <p>{dayFormatter.format(day.time)}</p>
            <p>{day.temp}&deg;C</p>
          </div>
        )
      })}
   </div>
  )
}
