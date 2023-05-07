const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
)
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
let timeIconContainer = document.querySelector('[data-js="time-icon"]')

const insertElementsIntoDOM = (
  IsDayTime,
  WeatherIcon,
  LocalizedName,
  Temperature,
  WeatherText
) => {
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }

  IsDayTime
    ? (timeImg.src = './src/day.svg')
    : (timeImg.src = './src/night.svg')

  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const cityName = event.target.city.value
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)

  insertElementsIntoDOM(
    IsDayTime,
    WeatherIcon,
    LocalizedName,
    Temperature,
    WeatherText
  )

  cityForm.reset()
})
