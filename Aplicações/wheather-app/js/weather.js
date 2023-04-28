const getApiKey = async () => {
  await fetch('src/config/apiInfo.json')
    .then(response => response.json())
    .catch(err => err)
}
const apiInfo = getApiKey()
console.log(apiInfo.key)
