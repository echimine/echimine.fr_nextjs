import Image from 'next/image';
import React from 'react';
import CardEdit from "@/components/commons/Cards/Edits/CardEdit";

const GridTopEdits = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6">
            <CardEdit id={'1'} slug={'Rynzler'} title={'Rynzler'}
                      vignette={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'} category="Tron"/>
            <Image
                src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
                width={450}
                height={450}
                alt=""
                className="rounded-2xl"
            />
            <Image
                src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
                width={450}
                height={450}
                alt=""
                className="rounded-2xl"
            />
            <Image
                src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
                width={450}
                height={450}
                alt=""
                className="rounded-2xl"
            />
            <Image
                src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
                width={450}
                height={450}
                alt=""
                className="rounded-2xl"
            />
            <Image
                src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
                width={450}
                height={450}
                alt=""
                className="rounded-2xl"
            />
            <Image
                src={'/images/cards-img/vignette_edit_ryzler_1x1.jpg'}
                width={450}
                height={450}
                alt=""
                className="rounded-2xl"
            />
        </div>
    );
};

export default GridTopEdits;
