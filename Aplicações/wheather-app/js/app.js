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
const setPersistenteWeather = cityName => {
  localStorage.setItem('cityNameSaved', cityName)
}
//pega os dados da ultima cidade salva
const getPersistenteWeather = () => {
  return localStorage.getItem('cityNameSaved')
}

const insertInfoWeather = (
  LocalizedName,
  WeatherText,
  Temperature,
  IsDayTime,
  WeatherIcon
) => {
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature
}

//popula as informações no card
const showCityWeatherInfo = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)

  insertInfoWeather(
    LocalizedName,
    WeatherText,
    Temperature.Metric.Value,
    IsDayTime,
    WeatherIcon
  )
  showCityCard()
}

const showLocalStoredCity = () => {
  const city = getPersistenteWeather()
  if (city) {
    showCityWeatherInfo(city)
  }
}

//envio do form
cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const cityName = event.target.city.value

  showCityWeatherInfo(cityName)
  setPersistenteWeather(cityName)

  cityForm.reset()
})

showLocalStoredCity()
