const APIKey = 'G5OnpGIKXjtGnKOAvTD5r1qpDutIEQFP'

const cityUrl = cityName =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`


const getCityData = async cityName => {
  const ciytUrl = cityUrl(cityName)
  try {
    const response = await fetch(ciytUrl)

    if (!response.ok) {
      throw new Error('Não foi possível receber os dados!')
    }
    const [cityData] = await response.json()

    return cityData
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityWeather = async cityName => {
  const {Key} = await getCityData(cityName)
  const cityWeathertUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
  try {
    const response = await fetch(cityWeathertUrl)

    if (!response.ok) {
      throw new Error('Não foi possível receber os dados!')
    }
    const [cityWeatherData] = await response.json()
debugger
    return cityWeatherData
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

getCityWeather('hortolandia')
