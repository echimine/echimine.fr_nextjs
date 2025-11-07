import React from 'react';
import Image from 'next/image';
import { Typographie } from '@/app/components/Typographie';

export interface DataItem {
  icon: string;
  title: string;
  total: string;
  description: string;
}

const CardData = ({ icon, title, total, description }: DataItem) => {
  return (
    <div className="max-w-sm w-full border-jaune border-1 rounded-2xl py-5 px-4 flex flex-col gap-8 h-full">
      <div className="flex justify-between">
        <div className="flex justify-center items-center rounded-xl bg-noir/5 w-13 h-12">
          <Image src={`${icon}`} alt={title} width={24} height={24} />
        </div>

        <Typographie variant="body-lg" className="text-noir/50">
          {title}
        </Typographie>
      </div>
      <Typographie weight="black" variant="total" className="text-center">
        {total}
      </Typographie>

      <Typographie className="">{description}</Typographie>
    </div>
  );
};

export default CardData;
