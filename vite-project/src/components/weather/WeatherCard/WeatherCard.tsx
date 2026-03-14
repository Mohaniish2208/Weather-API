export default function WeatherCard() {
  return (
    <section className="weathercard">
      <h2 className="weathercard-city">Toronto</h2>
      <p className="weathercard-temperature">12°C</p> {/* alt + 0176 for degree symbol */}
      <p className="weathercard-condition">Partly Cloudy</p>
      <div className="weathercard-details">
        <div>
          <span>Humidity</span>
          <strong>68%</strong>
        </div>

        <div className="weathercard-detail">
          <span>Wind</span>
          <strong>14km/h</strong>
        </div>
      </div>
    </section>
  )
}
