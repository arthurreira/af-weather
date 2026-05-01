export interface WeatherInfo {
    description: string
    emoji: string
}

const weatherCodes: Record<number, WeatherInfo> = {
    0: { description: "Clear sky", emoji: "☀️" },
    1: { description: "Mainly clear", emoji: "🌤️" },
    2: { description: "Partly cloudy", emoji: "⛅" },
    3: { description: "Overcast", emoji: "☁️" },
    45: { description: "Fog", emoji: "🌫️" },
    48: { description: "Icy fog", emoji: "🌫️" },
    61: { description: "Slight rain", emoji: "🌧️" },
    63: { description: "Moderate rain", emoji: "🌧️" },
    65: { description: "Heavy rain", emoji: "🌧️" },
    71: { description: "Slight snow", emoji: "❄️" },
    73: { description: "Moderate snow", emoji: "❄️" },
    75: { description: "Heavy snow", emoji: "❄️" },
    95: { description: "Thunderstorm", emoji: "⛈️" },
    51: { description: "Light drizzle", emoji: "🌦️" },
53: { description: "Moderate drizzle", emoji: "🌦️" },
55: { description: "Dense drizzle", emoji: "🌧️" },
}

export function getWeatherInfo(code: number): WeatherInfo {
    return weatherCodes[code] ?? { description: "Unknown", emoji: "❓" }

}