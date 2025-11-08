import React from 'react';
import { Left } from './Left';
import { Right } from './Right';

export const Univereeditfr = () => {
  return (
    <section className="md:py-30">
      <div className="gradient-bg-universeedit rounded-4xl md:rounded-[64px]">
        <div className="gradient-universeeditfr-pattern py-6 md:py-20 px-4 md:px-8 rounded-4xl md:rounded-[64px]">
          <div className="max-w-7xl h-full mx-auto">
            <div className="w-full h-full flex flex-col lg:flex-row gap-12">
              {/* GAUCHE */}
              <Left />
              {/* DROITE */}
              <Right />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
