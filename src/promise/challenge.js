import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

fetchData(`${API}/products`)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("Finally!"));
