import CardEdit from "@/components/commons/Cards/Edits/CardEdit";
import Image from "next/image";
import {Typographie} from "@/app/components/Typographie";

export default function MesCreationsDetails() {
    return (
        <>
            <main className="">
                <div className="w-full relative aspect-video h-[calc(100vh-100px)] bg-cover">
                    <Image
                        src="/images/vignette_edit_ryzler_16x9.png"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover object-center duration-300 ease-in-out brightness-50"
                    />
                    <Typographie
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[80] text-white text-center title-detail-edit"
                        variant="h1"
                        weight="black"
                    >
                        RYNZLER
                    </Typographie>

                </div>
                <div className="max-w-7xl w-full mx-auto ">
                    {/*entre il y aura un truc du genre inst ytb tiktok et discord*/}
                    <div className="flex justify-center items-center gap-4 py-20">
                        <div className="w-12 h-12 bg-black">

                        </div>
                        <div className="w-12 h-12 bg-red-600">

                        </div>
                        <div className="w-12 h-12 bg-blue-600">

                        </div>
                    </div>
                    <video controls className="w-full">
                        <source src="/video/edit_tron_16X9_fini.mp4" type="video/webm"/>
                    </video>
                    {/* afiicher en bas les edits de la catégorie en slider horizontal*/}
                </div>
            </main>

        </>
    )
}

