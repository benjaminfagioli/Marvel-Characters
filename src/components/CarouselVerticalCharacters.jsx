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
  return (
    <Swiper
      id='carouselCharacters'
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={25}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar = {{draggable: true}}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={false}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}>
      {characters?.map(ch=>
      <SwiperSlide>
        <CharactersCardVertical character={ch} key={ch.name}/>
      </SwiperSlide>
      )}
    </Swiper>
  );
};
export default CarouselVerticalCharacters