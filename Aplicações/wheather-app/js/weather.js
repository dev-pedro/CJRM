//const APIKey esta no arquivo ./src/config/apiconfig.js

const cityUrl = cityName =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl =  cityKey =>
  `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetcData = async url => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados.')
    }
    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetcData(cityUrl(cityName))

const getCityWeather = cityKey => fetcData(getWeatherUrl(cityKey))