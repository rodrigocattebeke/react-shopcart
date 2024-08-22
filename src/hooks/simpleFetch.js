export default async function simpleFetch(url) {
    let data, res;
    try {
        data = await fetch(url);
        res = await data.json();
    } catch (error) {
        console.log(error);
    }

    return res;
}
