

const getComicOrSerieByID = async (url, key, id, set)=>{
  try {
    const results= await fetch(`${url}/${id}${key}`)
    const {data} = await results.json()
    set(data.results[0]);
    console.log(data.results[0]);
  } catch (error) {
    console.log(error.message);
  }
}
export default getComicOrSerieByID