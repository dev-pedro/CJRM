const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
)
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
let timeIconContainer = document.querySelector('[data-js="time-icon"]')

//mostra card weather
const showCityCard = () => {
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
}

//salva dados localmente da ultima cidade pesquisada
const setPersistenteWeather = objDataWeatherPersist => {
  localStorage.setItem('dataWeatherPersist', JSON.stringify(objDataWeatherPersist))
}
//pega os dados da ultima cidade salva
const getPersistenteWeather = () => {
  return JSON.parse(localStorage.getItem('dataWeatherPersist'))
}

const insertInfoWeather = ({
  LocalizedName,
  WeatherText,
  Temperature,
  IsDayTime,
  WeatherIcon
}) => {
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

if (localStorage.getItem('dataWeatherPersist')) {
  insertInfoWeather(getPersistenteWeather())
  showCityCard()
}

//popula as informações no card
const showCityWeatherInfo = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)

  const dataWeatherPersist = {
    Key,
    LocalizedName,
    WeatherText,
    Temperature,
    IsDayTime,
    WeatherIcon
  }
  console.log(dataWeatherPersist)
  setPersistenteWeather(dataWeatherPersist)

  insertInfoWeather(dataWeatherPersist)
  showCityCard()
}


//envio do form
cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const cityName = event.target.city.value

  showCityWeatherInfo(cityName)

  cityForm.reset()
})
