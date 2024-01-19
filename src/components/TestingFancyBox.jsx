import "@fancyapps/ui/dist/fancybox/fancybox.css";
import React from 'react'
import Fancybox from "./Fancybox";
const TestingFancyBox = ({image, description}) => {
  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
        Images: {
          Panzoom: {
            panMode: "mousemove",
            mouseMoveFactor: 1.1,
            mouseMoveFriction: .72,
            }
        }
      }}
    >
      <a 
        data-fancybox 
        href={image}
        data-caption={description}
        >
        <img src={image} />
      </a>
    </Fancybox>
  )
}

export default TestingFancyBox