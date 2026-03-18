import "../../../styles/WeatherCard.css"

type WeatherCardProps = {
  cityName: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
}

export default function WeatherCard({ cityName, temperature, condition, humidity, windSpeed }: WeatherCardProps) {
  return (
    <section className="weathercard">
      <h2 className="weathercard-city">{cityName}</h2>
      <p className="weathercard-temperature">{temperature}</p>
      <p className="weathercard-condition">{condition}</p>
      <div className="weathercard-details">
        <div className="weathercard-detail">
          <h3>Humidity</h3>
          <strong>{humidity}%</strong>
        </div>

        <div className="weathercard-detail">
          <h3>Wind</h3>
          <strong>{windSpeed}km/h</strong>
        </div>
      </div>
    </section>
  )
}
