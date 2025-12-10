import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import {Typographie} from "@/app/components/Typographie";

interface CardEditParams {
    id: string;
    slug: string;
    title: string;
    vignette: string;
    category: string;
}

const CardEdit = ({
                      id,
                      slug,
                      title,
                      vignette = '/images/cards-img/vignette_edit_ryzler_1x1.jpg',
                      category,
                  }: CardEditParams) => {
    return (
        <Link href={`/mes-creations/${slug}`} className="group">
            <div className="relative">
                <Image
                    src={vignette}
                    width={450}
                    height={450}
                    alt=""
                    className="rounded-2xl"
                />

                <div
                    className="absolute bottom-10 left-6 z-20 text-white opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                    <Typographie variant="h4" component="h4">{title}</Typographie>
                    <Typographie>{category}</Typographie>
                </div>
            </div>
        </Link>
    );
};


export default CardEdit;
