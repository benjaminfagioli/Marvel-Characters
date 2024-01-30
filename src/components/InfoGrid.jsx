import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getCollectionURI from '../helpers/getCollectionURI';
import { OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap';

const MySwiper  = ({info, string}) => {
  const [string1, setstring1] = useState([])
  const [number, setnumber] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  // console.log(info);
  const navigate = useNavigate()
  // console.log(string1, info);
  useEffect(()=>{
    getCollectionURI(info, string, setstring1,offset, setIsLoading )
  },[offset])
  return (
    <Swiper
    id='comicsGrid'
    className='d-flex justify-content-evenly p-sm-3 p-lg-3 py-3 my-2'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      loop={true}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={(swiper) => console.log(swiper.params.navigation.nextEl.classList.contains('swiper-button-disabled'), swiper.isEnd)}
      onSlideNextTransitionStart={()=>{
        if (string === 'Comics') {
          offset+9 < info.available  && setOffset(offset+9)
          console.log(offset);
        }
        if (string === 'Series') {
          offset+20 < info.available  && setOffset(offset+20)
          
        }
      }}
      onSlidePrevTransitionStart={()=>{
        if (string === 'Comics') {
          offset-9 >= 0  && setOffset(offset-9)
          
        }
        if (string === 'Series') {
          offset-20 >= 0  && setOffset(offset-20)
          
        }
      }}
      // onSlideNextTransitionStart={()=>setOffset(offset+13)}
      // onSlidePrevTransitionStart={()=>setOffset(offset-13)}

    >
        <div className="imgContainer">
      <SwiperSlide>
        {
          isLoading?
          <Spinner animation="border" variant="secondary" />
          :
        string1.slice(number, number +9).map(item => 
          <OverlayTrigger key={item.id} overlay={<Tooltip>{item.title}</Tooltip>}>
            <img className='imgGrids' data-bs-toggle="tooltip" onClick={()=>navigate(`/${string.toLowerCase()}/${item.id}`)}  data-bs-placement="top"  data-bs-title={item.title}  alt={item.name} src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}/>
          </OverlayTrigger>)
          
        }
      </SwiperSlide>
      <SwiperSlide>
        
        {
          isLoading?
          <Spinner animation="border" variant="secondary" />
          :
        string1.slice(number, number +9).map(item => 
            <OverlayTrigger key={item.id} overlay={<Tooltip>{item.title}</Tooltip>}>
              <img className='imgGrids' data-bs-toggle="tooltip" onClick={()=>navigate(`/${string.toLowerCase()}/${item.id}`)}  data-bs-placement="top"  data-bs-title={item.title}  alt={item.name} src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}/>
            </OverlayTrigger>
          )}
      </SwiperSlide>
        </div>
        <h5 className='pb-0 pb-lg-1  w-100 text-center nameInfo'>{string} {string === 'Comics'?
        <span className='fs-6'> {Math.ceil((offset + 9 )/ 10)}/{Math.ceil(info.available / 9)} </span>
        :
        <span className='fs-6'> {Math.ceil((offset)/ 20) + 1}/{Math.ceil(info.available / 20) || 1} </span> 
      }
      </h5>
    </Swiper>
  );
};
export default MySwiper