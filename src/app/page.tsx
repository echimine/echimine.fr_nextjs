import CardData from '@/components/commons/Cards/Datas/CardData';
import { Typographie } from './components/Typographie';
import CtaButton from '@/components/commons/CtaButton/CtaButton';
import Image from 'next/image';

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
      <section className="w-full h-screen overflow-hidden flex justify-center">
        <div className="absolute inset-0">
          <div className="w-full h-dvh gradient-bg"></div>
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
      <section className="h-full sm:h-screen mx-auto flex flex-col w-full max-w-7xl gap-40">
        <div className="flex flex-col gap-2 ">
          <Typographie
            variant="h2"
            component="h2"
            weight="black"
            className="text-center"
          >
            MES CHIFFRES
          </Typographie>
          <Typographie
            variant="sous-title"
            component="p"
            weight="medium"
            className="text-center text-noir/60"
          >
            Une communauté en constante évolution
          </Typographie>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:p-4 gap-8 justify-items-center pb-30 md:pb-0">
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
      <div className="bg-noir rounded-[64px]">
        <section className="relative gradient-universeeditfr h-screen rounded-[64px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern
                id="exportPattern"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <rect width="10" height="10" fill="transparent" />
                <circle
                  cx="5"
                  cy="5"
                  r="1.6666666666666667"
                  fill="#ffffff"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#exportPattern)" />
          </svg>
        </section>
      </div>

      {/* <section className="bg-jaune rounded-2xl">
        <AboutMe />
      </section> */}

      {/* <DataEchimine /> */}
      {/*       <div className="md:pt-20">
        <MotionTypographie
          variant="h1"
          weight="bold"
          component="h2"
          className="px-6 py-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Echimine, c’est aussi une communauté : UniverseEditFR
        </MotionTypographie>
      </div>
      <section>
        <div className="flex flex-wrap gap-4 md:flex-nowrap items-center justify-center">
          <img
            src="/images/logo/logo-universeeditfr.png"
            alt=""
            className="w-[72px]"
          />
          <Typographie variant="h1" component="h1">
            X
          </Typographie>
          <img
            src="/images/logo/logo-discord.png"
            alt=""
            className="w-[72px] pr-2"
          />
        </div>
      </section> */}
      {/* <GridNormal /> */}
      {/* <section>
        <Typographie>Serveur Discord UniverseEditFR</Typographie>
        <img src="/images/backround-UNIVERSEEDITFR-3.png" alt="" />
        <Typographie>
          UniverseEditFR est un serveur qui réunit ma communauté mais aussi des
          editeurs que ça soit des débutants ou des expérimenter. Le but c'est
          d'éxpérimenter, discuter, promomouvoir ses vidéos et faire en sorte
          que vous aussi vous puissiez percer la-dedans.
        </Typographie>
      </section> */}
    </main>
  );
}
