import CitySearch from "@/components/CitySearch"
import { CITIES } from "@/lib/cities"

export default async function Page() {
  const results = await Promise.all(
    CITIES.map(async city => {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m,weather_code`,
        { next: { revalidate: 1800 } }
      )
      const data = await res.json()
      return {
        city: city.name,
        country: city.country,
        temperature: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
        weatherCode: data.current.weather_code,
      }
    })
  )

  return <CitySearch results={results} />
}