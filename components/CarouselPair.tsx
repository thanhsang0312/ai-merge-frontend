import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import '../styles/globals.css'

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { listCharacter } from './TabCategories';

const CarouselPair = () => {
  return (
    <Swiper
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={'auto'}
      speed={1000}
      spaceBetween={10}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      modules={[EffectCoverflow]}
      className="mySwiper"
    >
      {listCharacter.map((item, index) => (
        <SwiperSlide 
          key={index} 
          className='h-[150px] cursor-pointer'
        >
          <Card className='py-[initial] h-[150px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group'>
            <CardContent className="grid grid-cols-2 items-center h-[150px] px-[initial] relative">
              {/* First character */}
              <div className='h-full relative overflow-hidden'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-black/20 bg-opacity-0 transition-all duration-300 flex items-center justify-center group-hover:bg-opacity-30'>
                  <span className='text-white font-bold text-sm opacity-0 transition-all duration-300 group-hover:opacity-100'>
                    {item.name}
                  </span>
                </div>
              </div>
              
              {/* Second character */}
              <div className='h-full relative overflow-hidden'>
                <img 
                  src={listCharacter[index + 1]?.image} 
                  alt={listCharacter[index + 1]?.name} 
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-black/20   bg-opacity-0 transition-all duration-300 flex items-center justify-center group-hover:bg-opacity-30'>
                  <span className='text-white font-bold text-sm opacity-0 transition-all duration-300 group-hover:opacity-100'>
                    {listCharacter[index + 1]?.name}
                  </span>
                </div>
              </div>

              {/* VS indicator */}
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-red-600 shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:bg-red-100 z-10'>
                VS
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselPair;

