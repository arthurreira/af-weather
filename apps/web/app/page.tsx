import CitySearch from "@/components/CitySearch"
import { CITIES } from "@/lib/cities"

export const dynamic = "force-dynamic"

export default async function Page() {
  const results = await Promise.all(
    CITIES.map(async city => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m,weather_code`,
          { next: { revalidate: 1800 } }
        )
        const data = await res.json()
        return {
          city: city.name,
          country: city.country,
          temperature: data.current?.temperature_2m ?? null,
          windSpeed: data.current?.wind_speed_10m ?? null,
          weatherCode: data.current?.weather_code ?? null,
        }
      } catch {
        return {
          city: city.name,
          country: city.country,
          temperature: null,
          windSpeed: null,
          weatherCode: null,
        }
      }
    })
  )

  return <CitySearch results={results} />
}