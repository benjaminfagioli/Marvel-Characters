export const getData = async (setLoading, params, URL_BASE, key, setCharacters, count)=>{
  try {
    let info
    setLoading(true)
    if (params.get('name') && params.get('page')){
      let name = params.get('name')
      let i = params.get('page')
      info = await fetch(`${URL_BASE}${key}&nameStartsWith=${name}&offset=${i*20-20}`)
      console.log(1);
    } else if (params.get('name')) {
      info = await fetch(`${URL_BASE}${key}&nameStartsWith=${params.get('name')}`)
    } else if (params.get('page')){
      info = await fetch(`${URL_BASE}${key}&offset=${params.get('page')*20-20}`)
    }
    else {
      info = await fetch(`${URL_BASE}${key}`)
    }
    let {data} = await info.json()
    count.current = data
    console.log(data.results);
    setCharacters(data.results)
  } catch (error) {
    console.log(error.message);      
  } finally{
    setLoading(false)
  }
}