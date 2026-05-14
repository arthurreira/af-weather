"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { CardGrid } from "@/components/ui/card-grid"
import type { CardItem } from "@/lib/cards"
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

            {Object.entries(grouped).map(([country, cities]) => {
                const cards: CardItem[] = cities.map((city, index) => ({
                    id: `${country}-${city.city}`,
                    title: city.city,
                    description: `${city.temperature}°C · ${city.windSpeed} km/h`,
                    size: index === 0 ? "large" : "small",
                }))

                return (
                    <div key={country} className="space-y-3 mt-6">
                        <h2 className="text-lg font-semibold tracking-tight">
                            {country === "Finland" ? "🇫🇮" : "🇧🇷"} {country}
                        </h2>
                        <CardGrid cards={cards} />
                    </div>
                )
            })}
        </>
    )
}
