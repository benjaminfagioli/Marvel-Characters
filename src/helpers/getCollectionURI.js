const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE

const getCollectionURI = async (info, string, setstring1)=>{
  let aux= []
  if (string !== 'Stories') {
    try {
      const data = await fetch(`${info.collectionURI}${key}&limit=50`)
      const results = await data.json()
      results.data.results.forEach(result => {
        result.thumbnail?.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && aux.push(result)
      })
    } catch (error) {
      console.log(error.message);
    } finally{
      // console.log(aux);
      setstring1(aux)
    }
  } else{
    try {
      const data = await fetch(`${info.collectionURI}${key}&limit=40`)
      const results = await data.json()
      results.data.results.forEach(result => {
        aux.push(result)
      })
    } catch (error) {
      console.log(error.message);
    } finally{
      console.log(aux);
      setstring1(aux)
    }
  }
}
export default getCollectionURI