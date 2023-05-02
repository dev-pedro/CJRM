<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Obtendo as informações que serão exibidas na interface - Aula 02-04

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

    <div class="card shadow-lg rounded">
      <img data-js="time" src="https://via.placeholder.com/400x300" class="card-img-top">
      
      <div data-js="time-icon" class="bg-light mx-auto text-center"></div>
      
      <div data-js="weather-details" class="text-muted text-uppercase text-center">
        <h5 class="my-3">Nome da Cidade</h5>
        
        <div class="my-3">Clima</div>
        
        <div class="display-4 my-4">
          <span>00</span>
          <span>&deg;C</span>
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

cityForm.addEventListener('submit', async event => {
    event.preventDefault()
    const cityName = event.target.city.value
    const [{Key, LocalizedName}] = await getCityData(cityName)
    const [{WeatherText, Temperature}] = await getCityWeather(Key)
    console.log(WeatherText, Temperature.Metric.Value)

    cityForm.reset()
})
```
