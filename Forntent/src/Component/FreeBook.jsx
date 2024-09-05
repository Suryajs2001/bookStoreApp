// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from 'react'
import listt from '../../public/listt.json'
import Cards from "./Cards";
export default function FreeBook() {
const filterData=listt.filter((data)=>data.category=== "Free");
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto mdpx-20 px-4'>
    <div>
    <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
    <p>A platform that replicates key features of popular book-sharing services, enhancing user experience with innovative functionalities for book lovers.</p>
    </div>
   
 
   <div>
   <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>

   </div>
   </div>
   </>
  )
}
