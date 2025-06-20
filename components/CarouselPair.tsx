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
    <>
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
          <SwiperSlide key={index} className='h-[150px]'>
            <Card className='py-[initial] h-[150px] overflow-hidden'>
              <CardContent className="grid grid-cols-2 items-center h-[150px] px-[initial]">
                <div className='h-full bg-red-400'>
                  <img src={item.image} alt={item.name} className='w-full h-full object-cover'/>
                </div>
                <div className='h-full bg-red-500'><img src={listCharacter[index + 1]?.image} alt={listCharacter[index + 1]?.name} className='w-full h-full object-cover'/></div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselPair;

