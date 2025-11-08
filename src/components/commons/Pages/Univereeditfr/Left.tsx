import React from 'react';
import CtaButton from '../../CtaButton/CtaButton';
import { Typographie } from '@/app/components/Typographie';
import { MessageCircle, Sparkles, Trophy } from 'lucide-react';
import ListCard from './components/ListCard';

export const Left = () => {
  return (
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
          className="text-white opacity-70 text-center md:text-start"
        >
          {`Rejoins notre serveur Discord dédié à l'éditing ! Partage
                    tes créations, apprends de nouvelles techniques et
                    connecte-toi avec d'autres créateurs passionnés.`}
        </Typographie>
      </div>
      <div>
        <ul className="flex flex-col items-start  gap-4">
          <li>
            <ListCard
              icon={MessageCircle}
              title="Discussion & Entraide"
              subtitle="Échange avec la communauté"
            />
          </li>
          <li>
            <ListCard
              icon={Sparkles}
              title="Tutoriels & Ressources"
              subtitle="Améliore tes compétences"
            />
          </li>
          <li>
            <ListCard
              icon={Trophy}
              title="Concours & Événements"
              subtitle="Participe et gagne des récompenses"
            />
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
  );
};
