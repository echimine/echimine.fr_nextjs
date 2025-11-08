import CardData from '@/components/commons/Cards/Datas/CardData';
import { Typographie } from './components/Typographie';
import CtaButton from '@/components/commons/CtaButton/CtaButton';
import Image from 'next/image';
import { BadgeCheck, MessageCircle, Sparkles, Trophy } from 'lucide-react';
import Link from 'next/link';
import { Univereeditfr } from '@/components/commons/Pages/Univereeditfr/Univereeditfr';
import TopEdits from '@/components/commons/Pages/TopEdits/TopEdits';

export default function App() {
  const data = [
    {
      icon: '/images/icons/users.svg',
      title: 'Total',
      total: '21K',
      description: 'Abonnés',
    },
    {
      icon: '/images/icons/heart.svg',
      title: 'Total',
      total: '1.9M',
      description: "Likes sur l'intégralité du compte",
    },
    {
      icon: '/images/icons/eye.svg',
      title: 'Total',
      total: '1.4M',
      description: 'Vues sur un seul et même edit',
    },
    {
      icon: '/images/icons/film.svg',
      title: 'Total',
      total: '306',
      description: 'Vidéos au total',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="w-full h-screen overflow-hidden flex justify-center">
        <div className="absolute inset-0">
          <div className="w-full h-full gradient-bg"></div>
        </div>
        <div className="relative max-w-7xl flex flex-col items-center justify-center gap-6 px-4">
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
              className="text-center drop-shadow-lg max-w-2xl"
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
      {/* CHIFFRES */}
      <section className="h-full mx-auto flex flex-col w-full max-w-7xl gap-16 pb-30">
        <div className="flex flex-col gap-2 ">
          <Typographie
            variant="h1"
            component="h1"
            weight="black"
            className="text-center"
          >
            MES CHIFFRES
          </Typographie>
          <Typographie
            variant="sub-title"
            component="p"
            weight="medium"
            className="text-center text-noir/60 "
          >
            Une communauté en constante évolution
          </Typographie>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:p-4 gap-8 justify-items-center pb-30 md:pb-0 px-6">
          {data.map((data, index) => (
            <CardData
              key={index}
              icon={data.icon}
              title={data.title}
              total={data.total}
              description={data.description}
            />
          ))}
        </div>
      </section>

      {/* UNIVERSEEDITFR */}
      <Univereeditfr />
      {/* TOP EDITS */}
      <TopEdits />
    </main>
  );
}
