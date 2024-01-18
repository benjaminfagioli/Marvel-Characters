const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE

const getCollectionURI = async (info, string, setstring1, offset, setIsLoading)=>{
  let aux= []
  if (string === 'Comics') {
    setIsLoading(true)
    try {
      const data = await fetch(`${info.collectionURI}${key}&limit=10&offset=${offset}`)
      const results = await data.json()
      results.data.results.forEach(result => {
        result.thumbnail?.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && aux.push(result)
      })
    } catch (error) {
      console.log(error.message);
    } finally{
      setIsLoading(false)
      // console.log(aux);
      setstring1(aux)
    }
  } else if (string === 'Series') {
    setIsLoading(true)
    // console.log(info);
    try {
      const data = await fetch(`${info.collectionURI}${key}&limit=${20}&offset=${offset}`)
      const results = await data.json()
      results.data.results.forEach(result => {
        result.thumbnail?.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && aux.push(result)
      })
      // console.log(results.data.results);
    } catch (error) {
      console.log(error.message);
    } finally{
      setIsLoading(false)
      setstring1(aux)
    }
  }
   else{
    try {
      const data = await fetch(`${info.collectionURI}${key}&limit=40`)
      const results = await data.json()
      results.data.results.forEach(result => {
        aux.push(result)
      })
    } catch (error) {
      console.log(error.message);
    } finally{
      // console.log(aux);
      setstring1(aux)
    }
  }
}
export default getCollectionURI