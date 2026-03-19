// Reference taken from WMO Weather Interpretation codes ("https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM")

export default function getWeatherCondition(weatherCode: number) {
  switch (weatherCode) {
    case 0:
      return "Clear Sky"
    case 1:
      return "Mostly Clear"
    case 3:
      return "Cloudy"
    case 4:
      return "Reduced Visibility"
    case 5:
      return "Haze"
    case 17:
      return "Thunderstorm"
    case 22:
      return "Snow"
    case 23:
    case 24:
      return "Freezing Rain"
    case 25:
    case 26:
      return "Rain"
    case 30:
    case 31:
    case 32:
      return " Light Sandstorm"
    case 36:
    case 37:
      return "Light Snow"
    case 38:
    case 39:
      return "Heavy Snow"
    case 96:
    case 99:
      return "Thunderstorm with Hail"

    default:
      return "Unknown Weather"
  }
}
