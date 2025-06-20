import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';

const CarouselPair = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-3/4 h-[160px]">
            <div className="p-0.5 main-border rounded-2xl">
              <Card className='py-[initial] h-[150px] overflow-hidden'>
                <CardContent className="grid grid-cols-2 items-center h-[150px] px-[initial]">
                  <div className='h-full bg-red-400'></div>
                  <div className='h-full bg-red-500'></div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselPair;

