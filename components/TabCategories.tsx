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

export const listCharacter = [
  {
    name: "Iron Man",
    category: ["hot", "hero"],
    image: "/images/ironman.jpg",
  },
  {
    name: "Sonic",
    category: ["hot", "brainrot"],
    image: "/images/sonic.jpg",
  },
  {
    name: "Shark",
    category: ["hot", "brainrot"],
    image: "/images/shark.jpg",
  },
  {
    name: "Dr. Strange",
    category: ["hot", "hero"],
    image: "/images/dr-strange.jpg",
  },
  {
    name: "Monkey Banana",
    category: ["hot", "brainrot"],
    image: "/images/monkey-banana.jpg",
  },
  {
    name: "Crocodilo",
    category: ["hot", "brainrot"],
    image: "/images/crocodilo.jpg",
  },
  {
    name: "Superman",
    category: ["hot", "hero"],
    image: "/images/superman.jpg",
  },
  {
    name: "Cat",
    category: ["hot", "brainrot"],
    image: "/images/cat.jpg",
  },
  {
    name: "Thor",
    category: ["hot", "hero"],
    image: "/images/thor.jpg",
  },
  {
    name: "Burbaloni Luliloli",
    category: ["hot", "hero"],
    image: "/images/burbaloni-luliloli.jpg",
  },
  {
    name: "Ariel",
    category: ["hot", "hero"],
    image: "/images/ariel.jpg",
  },
  {
    name: "Bulldog",
    category: ["hot", "brainrot"],
    image: "/images/bulldog.jpg",
  },
  {
    name: "Godzilla",
    category: ["hot", "hero"],
    image: "/images/godzilla.jpg",
  },
  {
    name: "Turtle",
    category: ["hot", "brainrot"],
    image: "/images/turtle.jpg",
  },
]

const TabCategories = () => {

  return (
    <div className="mt-4 w-full">
      <Tabs defaultValue="hot" className="w-full">
        <TabsList className="w-full rounded-none border-none justify-start bg-[#FFFFFF]/40 p-[initial]">
          <div className="relative w-full">
            <Carousel className="w-full max-w-full">
              <CarouselContent className="flex gap-4 px-4">
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
                    <Image width={20} height={20} src={'/images/icon-brain.svg'} alt='' />
                    Brainrot
                  </TabsTrigger>
                </CarouselItem>
                <CarouselItem className="basis-1/4 w-auto">
                  <TabsTrigger
                    value="hero"
                    className="background-button-category h-full w-full text-white"
                  >
                    <Image width={20} height={20} src={'/images/icon-shield.svg'} alt='' />
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
          <LayoutCharacter category='hot' listCharacter={listCharacter}/>
        </TabsContent>
        <TabsContent value="brainrot"><LayoutCharacter category='brainrot' listCharacter={listCharacter}/></TabsContent>
        <TabsContent value="hero"><LayoutCharacter category='hero' listCharacter={listCharacter}/></TabsContent>
      </Tabs>
    </div>
  );
};

export default TabCategories;
