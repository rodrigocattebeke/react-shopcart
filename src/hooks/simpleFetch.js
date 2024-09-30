export default async function simpleFetch(url, method = "GET", body = {}) {
  let data, res;

  if (method == "GET") {
    try {
      data = await fetch(url, {
        method,
      });
      res = {
        data: await data.json(),
        isSuccess: true,
      };
    } catch (error) {
      res = {
        data: error,
        isSuccess: false,
      };
    }
  } else {
    if (Object.keys(body) < 1) return console.log("Se debe de incluir un Body válido");
    try {
      data = await fetch(url, {
        method,
        body: JSON.stringify(body),
      });
      res = {
        data: await data.json(),
        isSuccess: true,
      };
    } catch (error) {
      res = {
        data: error,
        isSuccess: false,
      };
    }
  }

  return res;
}
