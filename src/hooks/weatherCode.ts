// Reference taken from WMO Weather Interpretation codes ("https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM")

export default function getWeatherCondition(weatherCode: number) {
  if (weatherCode === 0) return "Clear Sky"

  if (weatherCode === 1) return "Mainly Clear"
  if (weatherCode === 2) return "Partly Cloudy"
  if (weatherCode === 3) return "Cloudy"

  if (weatherCode === 45 || weatherCode === 48) return "Fog"
  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) return "Drizzle"
  if (weatherCode === 56 || weatherCode === 57) return "Freezing Drizzle"

  if (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) return "Rain"
  if (weatherCode === 66 || weatherCode === 67) return "Freezing Rain"

  if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) return "Snow fall"
  if (weatherCode === 77) return "Snow Grains"

  if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) return "Rain Showers"
  if (weatherCode === 85 || weatherCode === 86) return "Snow Showers"

  if (weatherCode === 95) return "Thunderstorms (Slight Hail)"
  if (weatherCode === 96 || weatherCode === 99) return "Thunderstorm (Heavy Hail)"

  return "Unknown Weather"
}
