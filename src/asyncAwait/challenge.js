import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function getData(url_api) {
  const response = await fetch(url_api);
  const data = await response.json();
  return data;
}

const anotherFunction = async (url_api) => {
  try {
    const products = await getData(`${url_api}/products`);

    const product = await getData(`${url_api}/products/${products[0].id}`);

    const category = await getData(
      `${url_api}/categories/${product.category.id}`
    );

    console.log("Category", category);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction(API);
