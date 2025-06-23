'use client';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Settings } from 'lucide-react';
import Image from 'next/image';
import CarouselPair from '#/components/CarouselPair';
import TabCategories from '#/components/TabCategories';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="mx-auto flex max-h-screen max-w-lg flex-col items-center justify-start overflow-x-hidden overflow-y-scroll bg-[url('/images/background.png')] bg-cover bg-no-repeat py-4">
      {/* Top Bar */}
      <div className="mb-6 flex w-full items-center justify-between gap-2">
        <Button
          className="rounded-full bg-transparent px-3 py-2 text-xs hover:bg-transparent"
          // onClick={() => router.push("/buy-premium")}
        >
          <Image
            width={36}
            height={36}
            src={'/images/icon-premium.png'}
            alt=""
          />
        </Button>
        <div className="mx-2 flex-1">
          <div className="main-border relative rounded-2xl">
            <Input
              type="text"
              placeholder="Search characters..."
              className="rounded-full bg-gray-900 pl-8 text-xs font-bold text-white"
            />
            <Search className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <Button
          className="rounded-full bg-transparent hover:bg-transparent"
          onClick={() => router.push('/settings')}
        >
          <Image
            width={30}
            height={30}
            src={'/images/icon-setting.png'}
            alt=""
          />
        </Button>
      </div>
      {/* Content will go here */}
      <CarouselPair />
      <TabCategories />
      <div className="fixed flex items-center justify-center bottom-10">
        <Button className="bg-transparent hover:bg-transparent cursor-pointer">
          <Image
            width={100}
            height={100}
            src={'/images/button-center.png'}
            alt=""
          />
        </Button>
      </div>
    </div>
  );
}
