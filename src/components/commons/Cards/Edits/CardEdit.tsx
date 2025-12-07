import Image from 'next/image';
import React from 'react';
import Link from "next/link";

interface CardEditParams {
    id: string;
    slug: string;
    title: string;
    vignette: string;
}

const CardEdit = ({id, slug, title, vignette}:CardEditParams)  => {
  return (
    <><Link href={`/mes-creations/eliott`}>
        <Image
            src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
            width={450}
            height={450}
            alt=""
            className="rounded-2xl"
        />
    </Link>
    </>
  );
};

export default CardEdit;
