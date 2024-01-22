import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import CharactersCardVertical from './CharactersCardVertical/CharactersCardVertical';

const CarouselVerticalCharacters = ({characters}) => {
  const slidesPerViewResponsive = window.matchMedia('(max-width: 767px)').matches ? 2 : 3
  // console.log(slidesPerViewResponsive);
  console.log(slidesPerViewResponsive <= 2 ? true : false);
  // console.log(window.matchMedia('(max-width: 600px)').matches);
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