export default async function simpleFetch(url) {
  let data, res;
  try {
    data = await fetch(url);
    res = {
      data: await data.json(),
      isSucces: true,
    };
  } catch (error) {
    res = {
      data: error,
      isSucces: false,
    };
  }

  return res;
}
