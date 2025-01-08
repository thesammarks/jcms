'use client'

import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import JcmsCard from "@/app/components/Card/JcmsCard";
import Icons from "@/app/components/Icons/Icons";
import AboutCardContent from "@/app/components/Card/AboutCardContent";
import CarouselCardContent from "@/app/components/Card/CarouselCardContent";

export default function Page() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const prev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const next = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <main className="
            flex flex-col justify-center items-center gap-2
            min-h-screen w-full max-md:justify-start
            text-black dark:text-neutral-300
        ">
            <div
                className="
                    embla overflow-hidden max-w-3xl py-6
                    border border-neutral-300 dark:border-neutral-600
                "
                 ref={emblaRef}
            >
                <div className="embla__container flex items-center">
                    <div className={`embla__slide flex-shrink-0 max-w-xl ml-4 mr-2`}>
                        <JcmsCard
                            content={CarouselCardContent}
                            className={`border border-neutral-300 dark:border-neutral-600`}
                        />
                    </div>
                    <div className={`embla__slide flex-shrink-0 max-w-xl ml-4 mr-2`}>
                        <JcmsCard
                            content={AboutCardContent}
                            className={`border border-neutral-300 dark:border-neutral-600`}
                        />
                    </div>
                    <div className={`embla__slide flex-shrink-0 max-w-xl ml-4 mr-2`}>
                        <JcmsCard
                            content={CarouselCardContent}
                            className={`border border-neutral-300 dark:border-neutral-600`}
                        />
                    </div>
                    <div className={`embla__slide flex-shrink-0 max-w-xl ml-4 mr-2`}>
                        <JcmsCard
                            content={AboutCardContent}
                            className={`border border-neutral-300 dark:border-neutral-600`}
                        />
                    </div>
                </div>
            </div>
            <Icons/>
            <div className="flex gap-2">
                <button onClick={prev}>Previous</button> |
                <button onClick={next}>Next</button>
            </div>
        </main>
    );
}
