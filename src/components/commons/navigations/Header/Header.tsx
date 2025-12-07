'use client';

import {Typographie} from '@/app/components/Typographie';
import Image from 'next/image';
import React, {useState} from 'react';
import CtaButton from '../../CtaButton/CtaButton';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] bg-transparent">
            <div className="relative px-4">
                <div
                    className={`bg-noir px-[16px] py-[10px] items-center md:gap-8 gap-65 flex ${
                        isOpen ? 'rounded-t-[30px]' : 'rounded-[50px]'
                    }`}
                >
                    <Link href="/" className="w-[32px] h-[32px]">
                        <Image
                            src={'/images/logo/logo-universeeditfr.png'}
                            width={32}
                            height={32}
                            alt="logo de echimine"
                            className="rounded-4xl"
                        />
                    </Link>

                    <ul className="gap-5 hidden md:flex items-center">
                        <li>
                            <Link href="/mes-creations">
                                <Typographie className="text-white">Mes créations</Typographie>
                            </Link>
                        </li>
                        <li>
                            <Typographie className="text-white">UNIVERSEEDIT</Typographie>
                        </li>
                        <CtaButton href="/me-contacter" bg="bg-jaune">
                            <Typographie className="">Me contacter</Typographie>
                        </CtaButton>
                    </ul>

                    {/* Burger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white focus:outline-none ml-auto"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                </div>

                {/* Menu mobile */}
                <div
                    className={`bg-noir flex flex-col items-center gap-6 py-8 text-white transition-all duration-300 overflow-hidden ${
                        isOpen
                            ? 'max-h-96 opacity-100 rounded-b-[30px]'
                            : 'max-h-0 opacity-0'
                    } md:hidden`}
                >
                    <Link
                        href="/mes-creations"
                        onClick={() => setIsOpen(false)}
                        className="text-lg hover:text-jaune transition-colors"
                    >
                        Mes créations
                    </Link>
                    <Link
                        href=""
                        onClick={() => setIsOpen(false)}
                        className="text-lg hover:text-jaune transition-colors"
                    >
                        UNIVERSEEDIT
                    </Link>
                    <CtaButton
                        href="/me-contacter"
                        bg="bg-jaune text-noir font-semibold mt-2"
                    >
                        Me contacter
                    </CtaButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
