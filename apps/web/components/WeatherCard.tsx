'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getWeatherInfo } from "@/lib/weatherCodes"
interface WeatherCardProps {
    city: string
    country: string
    temperature: number
    windSpeed: number
    weatherCode: number
}

export default function WeatherCard({ city, temperature, windSpeed, weatherCode }: WeatherCardProps) {
    const weatherInfo = getWeatherInfo(weatherCode)

    return (
        <Card className="p-4 hover:scale-105 transition-transform">
            <CardHeader className="p-0 mb-3">
                <div className="flex flex-row justify-between items-start gap-2">
                    <CardTitle className="text-sm font-medium leading-tight">{city}</CardTitle>
                    <div className="text-xl font-bold shrink-0">{temperature}° {weatherInfo.emoji}</div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="text-sm text-muted-foreground">{weatherInfo.description}</div>
            </CardContent>
            <CardFooter className="p-0 mt-3 flex justify-between text-sm text-muted-foreground">
                <span>💨 Wind</span>
                <span>{windSpeed} km/h</span>
            </CardFooter>
        </Card>
    )
}