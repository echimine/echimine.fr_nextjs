import Image from 'next/image';
import React from 'react';

const CardEdit = () => {
  return (
    <>
      <Image
        src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
        width={450}
        height={450}
        alt=""
        className="rounded-2xl"
      />
    </>
  );
};

export default CardEdit;
