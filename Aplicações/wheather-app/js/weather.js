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

console.log((getCityData('hortolandia')))
