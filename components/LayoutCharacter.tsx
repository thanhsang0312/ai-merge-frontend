import React from 'react';
import { Card, CardContent } from './ui/card';
import AdsBanner from './AdsBanner';
import { useRouter } from 'next/navigation';

const CardCharacter = ({ image, name }: { image?: string, name?: string }) => {
  const router = useRouter();
  return (
    <Card 
      className='rounded-2xl h-[200px] p-0 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 group' 
      onClick={() => router.push(`/choose-character?character=${name}`)}
    >
      <CardContent className='w-full h-full bg-violet-500 px-[initial]'>
        <div className="relative h-full w-full">
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30'>
            <p className='text-white text-2xl font-bold transition-all duration-300 group-hover:text-3xl group-hover:drop-shadow-lg'>
              {name}
            </p>
          </div>
          {/* Overlay effect on hover */}
          <div className='absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
      </CardContent>
    </Card>
  );
};

const LayoutCharacter = ({
  category,
  listCharacter,
}: {
  category: string;
  listCharacter?: {
    name: string;
    category: string[];
    image: string;
  }[];
}) => {
  const listCharacterFiltered = listCharacter?.filter((item) => item.category.includes(category)) || [];

  // Chia nhóm: 2 card đầu, sau đó các nhóm 6 card
  const groups: { type: 'cards'; items: typeof listCharacterFiltered }[] = [];
  if (listCharacterFiltered.length > 0) {
    // Nhóm đầu tiên: 2 card
    groups.push({ type: 'cards', items: listCharacterFiltered.slice(0, 2) });
    // Các nhóm tiếp theo: mỗi nhóm 6 card
    let i = 2;
    while (i < listCharacterFiltered.length) {
      groups.push({ type: 'cards', items: listCharacterFiltered.slice(i, i + 6) });
      i += 6;
    }
  }

  return (
    <div className='px-4'>
      {groups.map((group, idx) => (
        <React.Fragment key={idx}>
          {group.items.length === 2 ? (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {group.items.map((item) => (
                <CardCharacter key={item.name} image={item.image} name={item.name} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {group.items.map((item) => (
                <CardCharacter key={item.name} image={item.image} name={item.name} />
              ))}
            </div>
          )}
          {/* Chèn AdsBanner sau mỗi nhóm, trừ nhóm cuối nếu không có card tiếp theo */}
          {idx < groups.length - 1 && <AdsBanner />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LayoutCharacter;
