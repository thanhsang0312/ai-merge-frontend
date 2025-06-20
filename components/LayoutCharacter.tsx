import React from 'react';
import { Card, CardContent } from './ui/card';
import AdsBanner from './AdsBanner';

const CardCharacter = ({image, name}: {image?: string, name?: string}) => {
  return (
    <Card className='rounded-2xl h-[200px] p-0 overflow-hidden'>
      <CardContent className='w-full h-full bg-violet-500'>
      </CardContent>
    </Card>
  );
};

const LayoutCharacter = ({
  category,
  listCharacter,
}: {
  category: string;
  listCharacter?: any;
}) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <CardCharacter />
        <CardCharacter />
      </div>
      <AdsBanner />
      <div className='grid grid-cols-2 gap-4 mt-4'>
      <CardCharacter />
      <CardCharacter /><CardCharacter />
      <CardCharacter /><CardCharacter />
      <CardCharacter />
      </div>
    </div>
  );
};

export default LayoutCharacter;
