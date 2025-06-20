import React from 'react';
import { Card, CardContent } from './ui/card';
import AdsBanner from './AdsBanner';

const CardCharacter = ({ image, name }: { image?: string, name?: string }) => {
  return (
    <Card className='rounded-2xl h-[200px] p-0 overflow-hidden'>
      <CardContent className='w-full h-full bg-violet-500 px-[initial]'>
        <img src={image} alt={name} className='w-full h-full object-cover' />
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
