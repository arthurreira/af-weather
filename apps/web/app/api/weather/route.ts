import { CITIES } from "../../../lib/cities"

export async function GET(request: Request) {


    try {

        const { searchParams } = new URL(request.url)
        const cityName = searchParams.get('city')?.toLowerCase()
        const city = CITIES.find(c => c.name.toLowerCase() === cityName)

        if (!cityName) {
            return Response.json({ error: 'City params null, cant search' }, { status: 400 })
        }
        if (!city) {
            return Response.json({ error: 'City not found' }, { status: 404 })
        }

        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m,weather_code`, {
            next: { revalidate: 1800 } // 30 minutes
        })
        const data = await res.json()

        return Response.json({
            city: city.name,
            country: city.country,
            temperature: data.current.temperature_2m,
            windSpeed: data.current.wind_speed_10m,
            weatherCode: data.current.weather_code,
        })
    } catch (error) {
        console.error('Error:', error)
        return Response.json({ error: 'Failed' }, { status: 500 })
    }
}