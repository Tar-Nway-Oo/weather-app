import axios from "axios";
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FChicago

export type currentData = {
   temperature_2m: number
   apparent_temperature: number
   precipitation: number
   weather_code: number
   wind_speed_10m: number
   time: number
}

export type dailyData = {
   time: number[]
   temperature_2m_max: number[]
   weather_code: number[]
}

export type hourlyData = {
   time: number[]
   temperature_2m: number[]
   apparent_temperature: number[]
   weather_code: number[]
   wind_speed_10m: number[]
   precipitation: number[]
}

export function getWeather(lat:number, lon:number, timezone:string) {

 return axios.get("https://api.open-meteo.com/v1/forecast?current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime", {
   params: {
      latitude: lat,
      longitude: lon,
      timezone: timezone
   }
}).then(({data}) => {
   return {
      current: parseCurrentWeather(data.current),
      daily: parseDailyWeather(data.daily),
      hourly: parseHourlyWeather(data.hourly, data.current)
   }
})
}

function parseCurrentWeather(current: currentData) {
  return {
    currentTemp: current.temperature_2m,
    apparentTemp: current.apparent_temperature,
    windSpeed: current.wind_speed_10m,
    precip: current.precipitation,
    weatherCode: current.weather_code
  }
}

function parseDailyWeather(daily: dailyData) {
   return daily.time.map((time, index) => {
      return {
         weatherCode: daily.weather_code[index],
         temp: daily.temperature_2m_max[index],
         time: time * 1000,
      }
   })
}

function parseHourlyWeather(hourly: hourlyData, current: currentData) {
   return hourly.time.map((time, index) => {
      return {
        apparentTemp: hourly.apparent_temperature[index],
        temp: hourly.temperature_2m[index],
        weatherCode: hourly.weather_code[index],
        windSpeed: hourly.wind_speed_10m[index],
        precip: hourly.precipitation[index],
        time: time * 1000
      }
   }).filter(obj => obj.time >= current.time * 1000)
}


