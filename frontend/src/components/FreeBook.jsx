import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'
import Cards from './Cards';


function FreeBook() {

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
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    }

    const filterData = list.filter((data)=>data.category === "Free");
    console.log(filterData)

  return (
    <> 
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4 md:mt-14 '>
       <div className="">
       <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tenetur aspernatur quasi accusamus ipsa consequuntur expedita. Fugit, tempore dolore. Possimus optio temporibus sint non numquam eos, consequatur consectetur facere error!</p>
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

export default FreeBook