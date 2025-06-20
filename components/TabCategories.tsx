import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import Image from 'next/image';
import LayoutCharacter from './LayoutCharacter';

const TabCategories = () => {
  return (
    <div className="mt-4 w-full">
      <Tabs defaultValue="hot" className="w-full">
        <TabsList className="w-full border-none justify-start bg-[#FFFFFF]/40 p-[initial]">
          <div className="relative w-full">
            <Carousel className="w-full max-w-full">
              <CarouselContent className="flex gap-4">
                <CarouselItem className="basis-1/4 w-auto">
                  <TabsTrigger
                    value="hot"
                    className="background-button-category h-full w-full text-white font-russo"
                  >
                    <Image width={20} height={20} src={'/images/icon-fire.svg'} alt='' />
                    Hot
                  </TabsTrigger>
                </CarouselItem>
                <CarouselItem className="basis-1/4 w-auto">
                  <TabsTrigger
                    value="brainrot"
                    className="background-button-category h-full w-full text-white"
                  >
                    <Image width={20} height={20} src={'/images/icon-fire.svg'} alt='' />
                    Brainrot
                  </TabsTrigger>
                </CarouselItem>
                <CarouselItem className="basis-1/4 w-auto">
                  <TabsTrigger
                    value="hero"
                    className="background-button-category h-full w-full text-white"
                  >
                    <Image width={20} height={20} src={'/images/icon-fire.svg'} alt='' />
                    Hero
                  </TabsTrigger>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </TabsList>
        <TabsContent value="hot">
          <LayoutCharacter category='hot'/>
        </TabsContent>
        <TabsContent value="brainrot"><LayoutCharacter category='brainrot'/></TabsContent>
        <TabsContent value="hero"><LayoutCharacter category='hero'/></TabsContent>
      </Tabs>
    </div>
  );
};

export default TabCategories;
