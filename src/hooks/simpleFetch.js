export default async function simpleFetch(url) {
  let data, res;
  try {
    data = await fetch(url);
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

  return res;
}
