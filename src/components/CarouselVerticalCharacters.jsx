import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import CharactersCardVertical from './CharactersCardVertical/CharactersCardVertical';
import { useEffect, useState } from 'react';

const key = import.meta.env.VITE_MY_KEY

const CarouselVerticalCharacters = ({collection}) => {
  
  const [characters, setCharacters] = useState(null)
  const getCharactersFromSerie =  async()=>{
    try {
      const data = await fetch(`${collection}${key}&limit=40`)
      const results = await data.json()
      const resultsFiltered = results.data.results.filter(ch=> ch?.thumbnail?.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && ch?.thumbnail?.extension !== 'gif')
      // console.log(resultsFiltered)
      setCharacters(resultsFiltered)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=> {
    getCharactersFromSerie()
  }, [])

  const slidesPerViewResponsive = window.matchMedia('(max-width: 767px)').matches ? 2 : 3
  console.log(slidesPerViewResponsive <= 2 ? true : false);

  return (
    <Swiper
      id='carouselCharacters'
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={slidesPerViewResponsive === 2 ? 15 : 25}
      slidesPerView={slidesPerViewResponsive}
      navigation
      pagination={{ clickable: true }}
      scrollbar = {{draggable: true}}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={slidesPerViewResponsive === 2 ? true : false}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}>
      {characters?.map(ch=>
      <SwiperSlide>
        <CharactersCardVertical character={ch} key={ch.id}/>
      </SwiperSlide>
      )}
    </Swiper>
  );
};
export default CarouselVerticalCharacters