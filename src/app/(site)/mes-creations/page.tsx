'use client';


import {Typographie} from "@/app/components/Typographie";
import GridTopEdits from "@/components/commons/Pages/TopEdits/components/GridTopEdits";

export default function Home() {
    return (
        <>
            <main className="">
                <section className="relative w-full h-screen overflow-hidden flex justify-center">
                    <div className="absolute inset-0">
                        <div className="w-full h-full gradient-bg"></div>
                    </div>
                    <div
                        className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-6 px-4">
                        <Typographie
                            component="h1"
                            className="title drop-shadow-2xl opacity-80"
                            weight="black"
                        >MES CRÉATIONS
                        </Typographie>
                    </div>
                </section>

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
                </div>
                <div className="max-w-7xl w-full mx-auto ">
                    <GridTopEdits/>
                </div>
            </main>
        </>
    );
}
