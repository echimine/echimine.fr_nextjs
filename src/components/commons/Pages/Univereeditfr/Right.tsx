import { Typographie } from '@/app/components/Typographie';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const Right = () => {
  return (
    <div className="w-full h-full glass-bg-rect text-white rounded-2xl px-8 py-6 flex flex-col gap-8 flex-1">
      <div className=" flex items-center w-full gap-4">
        <Image
          src="/images/logo/universeeditfr.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="(min-width: 768px) 72px, 48px"
          className="rounded-full w-12 h-12 md:w-[72px] md:h-[72px]"
        />

        <div className="glass-bg-rect2 rounded-2xl h-[87px] w-full flex gap-2 items-center justify-between px-6">
          <div>
            <Typographie>UNIVERSEEDITFR</Typographie>
            <Typographie className="opacity-60">Serveur discord</Typographie>
          </div>
          <div className="md:flex gap-2 items-center hidden ">
            <div className="bg-[#22C55E] rounded-full w-[12px] h-[12px]"></div>
            <Typographie>en ligne</Typographie>
          </div>
        </div>
      </div>

      <div className="rounded-2xl glass-bg-rect2 px-6 py-4.5 h-full flex-col flex gap-6">
        <div className="w-full h-[30vh] relative">
          <Image
            src={'/images/backround-UNIVERSEEDITFR-3.png'}
            fill
            alt=""
            className="object-cover rounded-[18px]"
          />
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <div className="flex gap-3 items-center">
              <BadgeCheck width={20} height={20} color="#FCD509" />
              <Typographie>Communauté active et bienveillante</Typographie>
            </div>
          </li>
          <li>
            <div className="flex gap-3 items-center">
              <BadgeCheck width={20} height={20} color="#FCD509" />
              <Typographie>Support et conseils personnalisés</Typographie>
            </div>
          </li>
          <li>
            <div className="flex gap-3 items-center">
              <BadgeCheck width={20} height={20} color="#FCD509" />
              <Typographie>Actualités et nouveautés en exclusivité</Typographie>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
