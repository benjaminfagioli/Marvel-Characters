const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE
const getSingleCharacter = async (setCharacter, id)=>{
  try {
    let info = await fetch(`${URL_BASE}/${id}${key}`)
    let {data} = await info.json()
    let results = data.results[0]
    console.log(results);
    setCharacter(results)
  } catch (error) {
    console.log(error.message);
  }
}
export default getSingleCharacter