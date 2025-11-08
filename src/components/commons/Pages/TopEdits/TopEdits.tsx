import { Typographie } from '@/app/components/Typographie';
import Link from 'next/link';
import React from 'react';
import GridTopEdits from './components/GridTopEdits';

const TopEdits = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-30 py-20">
      <div className="flex justify-center items-center flex-col gap-2">
        <Typographie
          variant="h1"
          component="h1"
          weight="black"
          className="text-center"
        >
          MES MEILLEURES EDITS
        </Typographie>
        <Typographie variant="sub-title" component="h4" className="text-center">
          Mes créations que je pourrais regarder en boucle
        </Typographie>
      </div>
      <div className="md:px-0 md:py-0 px-6 w-full">
        <Link
          href="/mes-creations"
          className="bg-jaune w-full rounded-2xl h-[40vh] flex flex-col justify-center items-center gap-4"
        >
          <div className="flex flex-col items-center gap-2 px-4 md:px-0">
            <Typographie
              variant="h3"
              component="h3"
              weight="bold"
              className="text-center"
            >
              Envie de découvrir encore plus d’édits ?
            </Typographie>
            <Typographie className="opacity-60 text-center">
              Trier par catégories, date, likes, vues et bien plus encore...
            </Typographie>
          </div>
          <div className="bg-white flex justify-center items-center w-[196px] h-[56px] rounded-[30px] border-1">
            <Typographie>Voir mes créations</Typographie>
          </div>
        </Link>
      </div>
      {/* GRID*/}
      <GridTopEdits />
    </section>
  );
};

export default TopEdits;
