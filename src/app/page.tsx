import CardData from '@/components/commons/Cards/Datas/CardData';
import { Typographie } from './components/Typographie';
import CtaButton from '@/components/commons/CtaButton/CtaButton';
import Image from 'next/image';
import { BadgeCheck, Eye, MessageCircle, Sparkles, Trophy } from 'lucide-react';

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
      <section className="h-full mx-auto flex flex-col w-full max-w-7xl gap-40 pb-30">
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
      <section className="py-30">
        <div className="gradient-bg-universeedit rounded-[64px]">
          <div className="gradient-universeeditfr-pattern h-screen flex justify-center items-center gap-4 py-16 rounded-[64px]">
            <div className="max-w-7xl h-full ">
              <div className="w-full h-full flex gap-12">
                <div className="flex flex-col items-start justify-between flex-1">
                  <div className="flex flex-col gap-2">
                    <Typographie
                      variant="h2"
                      component="h2"
                      weight="black"
                      className="text-white"
                    >
                      UNIVERSEEDITFR
                    </Typographie>
                    <Typographie
                      variant="sous-title"
                      className="text-white opacity-70"
                    >
                      {`Rejoins notre serveur Discord dédié à l'éditing ! Partage
                    tes créations, apprends de nouvelles techniques et
                    connecte-toi avec d'autres créateurs passionnés.`}
                    </Typographie>
                  </div>
                  <div>
                    <ul className="flex flex-col items-start gap-4">
                      <li>
                        <div className="flex justify-center items-center gap-4">
                          <div className="glass-icon-jaune flex justify-center items-center rounded-2xl w-12 h-12">
                            <MessageCircle
                              width={24}
                              height={24}
                              color="#FCD509"
                            />
                          </div>
                          <div className="flex flex-col">
                            <Typographie className="text-white">
                              Discussion & Entraide
                            </Typographie>
                            <Typographie className="text-white opacity-60">
                              Échange avec la communauté
                            </Typographie>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center gap-4">
                          <div className="glass-icon-jaune flex justify-center items-center rounded-2xl w-12 h-12">
                            <Sparkles width={24} height={24} color="#FCD509" />
                          </div>
                          <div className="flex flex-col">
                            <Typographie className="text-white">
                              Tutoriels & Ressources
                            </Typographie>
                            <Typographie className="text-white opacity-60">
                              Améliore tes compétences
                            </Typographie>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center gap-4">
                          <div className="glass-icon-jaune flex justify-center items-center rounded-2xl w-12 h-12">
                            <Trophy width={24} height={24} color="#FCD509" />
                          </div>
                          <div className="flex flex-col">
                            <Typographie className="text-white">
                              Concours & Événements
                            </Typographie>
                            <Typographie className="text-white opacity-60">
                              Participe et gagne des récompenses
                            </Typographie>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <CtaButton
                    href="https://discord.gg/bHerfUqsj2"
                    bg="bg-jaune"
                    target="_blank"
                  >
                    Rejoindre UNIVERSEEDITFR
                  </CtaButton>
                </div>

                <div className="w-full h-full glass-bg-rect text-white rounded-2xl px-8 py-6 flex flex-col gap-8 flex-1">
                  <div className=" flex items-center gap-4">
                    <Image
                      src={'/images/logo/universeeditfr.png'}
                      width={72}
                      height={72}
                      alt=""
                      className="rounded-[100px]"
                    />
                    <div className="glass-bg-rect2 rounded-2xl h-[87px] w-full flex gap-2 items-center justify-between px-6">
                      <div>
                        <Typographie>UNIVERSEEDITFR</Typographie>
                        <Typographie className="opacity-60">
                          Serveur discord
                        </Typographie>
                      </div>
                      <div className="flex gap-2 items-center">
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
                          <Typographie>
                            Communauté active et bienveillante
                          </Typographie>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-3 items-center">
                          <BadgeCheck width={20} height={20} color="#FCD509" />
                          <Typographie>
                            Support et conseils personnalisés
                          </Typographie>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-3 items-center">
                          <BadgeCheck width={20} height={20} color="#FCD509" />
                          <Typographie>
                            Actualités et nouveautés en exclusivité
                          </Typographie>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <div></div>
      </section>

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
