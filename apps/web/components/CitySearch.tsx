"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import WeatherCard from "@/components/WeatherCard"

interface CitySearchProps {
    results: {
        city: string
        country: string
        temperature: number
        windSpeed: number
        weatherCode: number
    }[]
}
export default function CitySearch({ results }: CitySearchProps) {
    const [query, setQuery] = useState('')
    const filtered = results.filter(r =>
        r.city.toLowerCase().includes(query.toLowerCase())
    )


    const grouped = filtered.reduce((acc, city) => {
        const key = city.country
        if (!acc[key]) acc[key] = []
        acc[key].push(city)
        return acc
    }, {} as Record<string, typeof results>)

    return (
        <>
            <Input
                placeholder="Search city..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}

            />

            {Object.entries(grouped).map(([country, cities]) => (
                <div key={country} className="space-y-3 mt-6">
                    <h2 className="text-lg font-semibold tracking-tight">
                        {country === "Finland" ? "🇫🇮" : "🇧🇷"} {country}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto' }}>
                        {cities.map((city, index) => (
                            <div key={city.city} className={index === 0 ? "row-span-2" : ""}>
                                <WeatherCard {...city} />
                            </div>
                        ))}
                    </div>

                </div>
            ))}

        </>
    )
}