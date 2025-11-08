import CardData from '@/components/commons/Cards/Datas/CardData';
import { Typographie } from './components/Typographie';
import CtaButton from '@/components/commons/CtaButton/CtaButton';
import Image from 'next/image';
import { BadgeCheck, Eye, MessageCircle, Sparkles, Trophy } from 'lucide-react';
import Link from 'next/link';

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
      <section className="h-full mx-auto flex flex-col w-full max-w-7xl gap-40 pb-30">
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
      <section className="md:py-30">
        <div className="gradient-bg-universeedit rounded-4xl md:rounded-[64px]">
          <div className="gradient-universeeditfr-pattern py-6 md:py-20 px-4 md:px-8 rounded-4xl md:rounded-[64px]">
            <div className="max-w-7xl h-full mx-auto">
              <div className="w-full h-full flex flex-col lg:flex-row gap-12 ">
                {/* GAUCHE */}
                <div className="flex flex-col items-center md:items-start justify-between flex-1 gap-12">
                  <div className="flex flex-col w-full gap-4">
                    <Typographie
                      variant="h1"
                      component="h1"
                      weight="black"
                      className="text-white text-center"
                    >
                      UNIVERSEEDIT
                    </Typographie>
                    <Typographie
                      variant="sub-title"
                      component="p"
                      className="text-white opacity-70 text-center"
                    >
                      {`Rejoins notre serveur Discord dédié à l'éditing ! Partage
                    tes créations, apprends de nouvelles techniques et
                    connecte-toi avec d'autres créateurs passionnés.`}
                    </Typographie>
                  </div>
                  <div>
                    <ul className="flex flex-col items-start  gap-4">
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
                {/* DROITE */}
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
                        <Typographie className="opacity-60">
                          Serveur discord
                        </Typographie>
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
      <section className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-30 py-20">
        <div className="flex justify-center items-center flex-col gap-2">
          <Typographie variant="h1" component="h1" weight="black">
            MES MEILLEURES EDITS
          </Typographie>
          <Typographie variant="sub-title" component="h4">
            Mes créations que je pourrais regarder en boucle
          </Typographie>
        </div>
        <Link
          href="/mes-creations"
          className="bg-jaune w-full rounded-2xl h-[40vh] flex flex-col justify-center items-center gap-4"
        >
          <div className="flex flex-col items-center gap-2">
            <Typographie variant="h3" component="h3" weight="bold">
              Envie de découvrir encore plus d’édits ?
            </Typographie>
            <Typographie className="opacity-60">
              Trier par catégories, date, likes, vues et bien plus encore...
            </Typographie>
          </div>
          <div className="bg-white flex justify-center items-center w-[196px] h-[56px] rounded-[30px] border-1">
            <Typographie>Voir mes créations</Typographie>
          </div>
        </Link>
      </section>
    </main>
  );
}
