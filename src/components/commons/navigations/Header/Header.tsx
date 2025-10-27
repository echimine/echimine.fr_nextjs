import { Typographie } from '@/app/components/Typographie';
import Image from 'next/image';
import React from 'react';
import CtaButton from '../../CtaButton/CtaButton';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-center sticky top-10 z-50">
      <div className="bg-noir px-[16px] py-[10px] items-center rounded-[50px] gap-8 flex">
        <Link href="/">
          <Image
            src={'/images/logo/logo-universeeditfr.png'}
            width={32}
            height={32}
            sizes="100vw"
            alt="logo de echimine"
            className="rounded-4xl"
          />
        </Link>

        <ul className="flex text-white gap-5">
          <li>
            <Typographie>Mes créations</Typographie>
          </li>
          <li>
            <Typographie>UNIVERSEEDIT</Typographie>
          </li>
        </ul>
        <CtaButton href="/me-contacter" bg="bg-jaune">
          <Typographie className="">Me contacter</Typographie>
        </CtaButton>
      </div>
    </header>
  );
};

export default Header;
