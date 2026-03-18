import SearchForm from "../../weather/SearchForm/SearchForm"
import StatusMessage from "../../weather/StatusMessage/StatusMessage"
import WeatherCard from "../../weather/WeatherCard/WeatherCard"
import "../../../styles/AppShell.css"
import { useState } from "react"

type WeatherState = {
  cityNAme: string
  temperature: number
  humidity: number
  windSpeed: number
  condition: string
}

export default function Appshell() {
  const [city, setCity] = useState("")
  const [statusMessage, setStatusMessage] = useState("Search for a city to begin")
  const [weather, setWeather] = useState<WeatherState | null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <main className="appshell">
      <div className="appshell-container">
        <header className="appshell-container-header">
          <h1>Weather API Dashboard</h1>
          <p>Search any city to view weather details.</p>
        </header>

        <SearchForm />
        <StatusMessage message="Search for a city to begin." />
        <WeatherCard />
      </div>
    </main>
  )
}
