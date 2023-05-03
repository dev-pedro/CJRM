<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Inserindo na interface os ícones e imagens - Aula 02-06

### Resumo

### Código Usados Nesta Aula

HTML:

```html
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/style.css">
  <title>Weather Application</title>
</head>
<body>
  <div class="container my-5 mx-auto">
    <h1 class="text-light text-center my-4">Informações do Clima</h1>

    <form data-js="change-location" class="my-4 text-center text-white-50">
      <label for="city">Insira o nome de uma cidade</label>
      <input class="form-control p-4" type="text" name="city" placeholder="Ex: Miami" autofocus>
    </form>

    <div data-js="city-card" class="card shadow-lg rounded d-none">
      <img data-js="time" src="https://via.placeholder.com/400x300" class="card-img-top">

      <div data-js="time-icon" class="bg-light mx-auto text-center time-icon"></div>

      <div data-js="weather-details" class="text-muted text-uppercase text-center">
        <h5 data-js="city-name" class="my-3">Nome da Cidade</h5>

        <div data-js="city-weather" class="my-3">Clima</div>

        <div class="display-4 my-4">
          <span data-js="city-temperature">00</span>
          <span>°C</span>
        </div>
      </div>
    </div>
  </div>

  <script src="./src/config/apiconfg.js"></script>
  <script src="./js/weather.js"></script>
  <script src="./js/app.js"></script>
</body>
</html>
```

CSS:

```css
body {
  background: #233047;
}

.container {
  max-width: 400px;
}

h1 {
  font-size: 2.2rem;
}

.time-icon {
  position: relative;
  top: -50px;
  border-radius: 50%;
  width: 100px;
  margin-bottom: -50px;
}
```

Javascript: weather.js

```javascript
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
```

Javascript: app.js

```javascript
const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
)
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
let timeIconContainer = document.querySelector('[data-js="time-icon"]')

cityForm.addEventListener('submit', async event => {
  event.preventDefault()
  const cityName = event.target.city.value
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }

  if (IsDayTime) {
    timeImg.src = './src/day.svg'
  } else {
    timeImg.src = './src/night.svg'
  }

  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  cityForm.reset()
})
```
