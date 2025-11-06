import { ChevronDown } from 'lucide-react';
import { Typographie } from './Typographie';
import Image from 'next/image';
import CtaButton from '@/components/commons/CtaButton/CtaButton';

const Hero = () => {
  return (
    <section className="w-full h-screen overflow-hidden flex justify-center">
      <div className="absolute inset-0">
        <div className="w-full h-full gradient-bg"></div>
      </div>

      <div className="relative h-screen max-w-7xl flex flex-col items-center justify-center gap-6 px-4">
        <Typographie
          component="h1"
          className="title drop-shadow-2xl opacity-80 text-center"
          weight="black"
        >
          ECHIMINE
        </Typographie>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Typographie
            variant="h4"
            component="h2"
            fontChoice="font-excon"
            className="font-archivo text-center drop-shadow-lg max-w-2xl"
          >
            Editeur de films et séries sur Tiktok depuis 2022
          </Typographie>
          <div className="flex flex-col md:flex-row gap-4">
            <CtaButton href="#decouvrir" bg="bg-jaune">
              Rejoindre la communauté
            </CtaButton>
            <CtaButton href="#universeeditfr" bg="border-1">
              Découvrir
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
