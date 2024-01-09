import { useState, useEffect } from "react"
import Current, {CurrentObj} from "./components/Current"
import Daily, {DailyObj} from "./components/Daily"
import Hourly, {HourlyObj} from "./components/Hourly"
import { getWeather } from "./GetWeather"
import "./index.css"

type DataObj = {
  current: CurrentObj
  daily: DailyObj[]
  hourly: HourlyObj[]
}


export default function App() {

  const [current, setCurrent] = useState<CurrentObj>(
    {
      currentTemp: 0,
      apparentTemp: 0,
      windSpeed: 0,
      precip: 0,
      weatherCode: 0
    }
  );
  const [daily, setDaily] = useState<DailyObj[]>([
    {
      weatherCode: 0,
      temp: 0,
      time: 0
    }
  ]);
  const [hourly, setHourly] = useState<HourlyObj[]>([
    {
      apparentTemp: 0,
      temp: 0,
      weatherCode: 0,
      windSpeed: 0,
      precip: 0,
      time: 0
    }
  ]);
 
  useEffect(() => {

    getWeather(19.8721883, 95.5589521, Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderData);

    function renderData({current, daily , hourly}: DataObj) {
      setCurrent(current)
      setDaily(daily)
      setHourly(hourly)
    }
  }, [])

  return (
    <div className="app" aria-label="weather-app">
      <Current
        current={current}
      />
      <Daily
        daily={daily}
      />
      <Hourly
        hourly={hourly}
      />
    </div>
  )
}
