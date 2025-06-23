"use client";

import { Button } from '#/components/ui/button';
import { Input } from '#/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'

const ChooseCharacterContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const character = searchParams.get('character');
  
  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col items-center justify-start overflow-x-hidden overflow-y-scroll bg-[url('/images/background.png')] bg-cover bg-no-repeat py-4">
      <div className="flex w-full items-center justify-between gap-2 py-4">
        <Button
          className="rounded-full bg-transparent px-3 py-2 text-xs hover:bg-transparent cursor-pointer"
        onClick={() => router.push("/")}
        >
          <Image
            width={36}
            height={36}
            src={'/images/icon-back.png'}
            alt=""
          />
        </Button>
        <div className="mx-2 flex-1">
          <div className="main-border p-1 relative rounded-2xl overflow-hidden">
            <div className='bg-[#000000]/40 text-white text-center rounded-xl'>
              CHOOSE CHARACTER
            </div>
          </div>
        </div>
        <div className='w-10 h-10'></div>
      </div>
      <div className='h-2 w-full' style={{background: 'linear-gradient(3deg,rgba(18, 0, 47, 1) 0%, rgba(50, 0, 75, 1) 50%)'}}></div>
      
      {/* Display selected character if available */}
      {character && (
        <div className="mt-4 text-center">
          <p className="text-white text-lg">Selected: {character}</p>
        </div>
      )}
      
    </div>
  )
}

const ChoosePairPage = () => {
  return (
    <Suspense fallback={
      <div className="mx-auto flex h-screen max-w-lg flex-col items-center justify-start overflow-x-hidden overflow-y-scroll bg-[url('/images/background.png')] bg-cover bg-no-repeat py-4">
        <div className="flex w-full items-center justify-between gap-2 py-4">
          <Button
            className="rounded-full bg-transparent px-3 py-2 text-xs hover:bg-transparent cursor-pointer"
          >
            <Image
              width={36}
              height={36}
              src={'/images/icon-back.png'}
              alt=""
            />
          </Button>
          <div className="mx-2 flex-1">
            <div className="main-border p-1 relative rounded-2xl overflow-hidden">
              <div className='bg-[#000000]/40 text-white text-center rounded-xl'>
                CHOOSE CHARACTER
              </div>
            </div>
          </div>
          <div className='w-10 h-10'></div>
        </div>
        <div className='h-2 w-full' style={{background: 'linear-gradient(3deg,rgba(18, 0, 47, 1) 0%, rgba(50, 0, 75, 1) 50%)'}}></div>
        <div className="mt-4 text-center">
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    }>
      <ChooseCharacterContent />
    </Suspense>
  )
}

export default ChoosePairPage;