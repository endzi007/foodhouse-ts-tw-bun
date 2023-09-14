import React from 'react'
import { assetUrlBuilder } from '../../helpers/assetUrlBuilder'
import { useInView } from 'react-intersection-observer';


interface FeaturesSectionProps {
    main_heading: string
    features: single_feature[]
    bg_image: string
}

type single_feature = {
    icon: string
    heading: string
    description: string
}


function FeaturesSection(props: FeaturesSectionProps) {
    const { ref, inView, entry } = useInView({
        rootMargin: "-150px",
        triggerOnce: false
    });

    return <section className={`bg-gray-900`}>
        <div ref={ref} className={`container px-6 py-10 mx-auto beforeAnimation ${inView && "animateChild"}`}>
            <h1 className={`text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white`}>
                {props.main_heading}
            </h1>
            <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-primary-color-500 rounded-full" />
                <span className="inline-block w-3 h-1 ml-1 bg-primary-color-500 rounded-full" />
                <span className="inline-block w-1 h-1 ml-1 bg-primary-color-500 rounded-full" />
            </div>

            <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                    {props.features.map((feature: single_feature) => {
                        return <div className="space-y-3">
                            <span className="block p-3 text-primary-color-500 bg-primary-color-100 max-w-[100px] rounded-xl dark:text-white dark:bg-primary-color-500">
                                <img src={assetUrlBuilder(feature.icon)} alt='icon' />
                            </span>
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                {feature.heading}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-300">
                                {feature.description}
                            </p>
                        </div>
                    })}
                </div>
                <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                    <img
                        className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                        src={props.bg_image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
}

FeaturesSection.defaultProps = {
    main_heading: "Usluge restorana",
    features: [
        {
            icon: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 L90 10 L80 90 L20 90 Z" fill="black" />
                <path d="M25 25 L75 75" stroke="white" stroke-width="10" />
                <path d="M30 20 L70 80" stroke="white" stroke-width="10" />
            </svg>
            ,
            heading: "Naš meni",
            description: `Naš meni sadrži širok spektar jela, od klasičnih favorita do savremenih kreacija. Mi smo ponosni što koristimo samo najsvježije i najkvalitetnije sastojke, dobavljene od lokalnih dobavljača.`
        },
        {
            icon: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 L90 10 L80 90 L20 90 Z" fill="black" />
                <path d="M25 25 L75 75" stroke="white" stroke-width="10" />
                <path d="M30 20 L70 80" stroke="white" stroke-width="10" />
            </svg>
            ,
            heading: "Ketering",
            description: `Nudimo uslugu kateringa za sve vrste događaja, od poslovnih sastanaka do privatnih proslava, 
            sa menijem koji će biti pripremljen prema vašim željama i potrebama. Kontaktirajte nas i mi ćemo se pobrinuti
             za sve, od pripreme hrane do dostave i posluživanja, tako da se možete potpuno opustiti i uživati.`
        },
        {
            icon: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 L90 10 L80 90 L20 90 Z" fill="black" />
                <path d="M25 25 L75 75" stroke="white" stroke-width="10" />
                <path d="M30 20 L70 80" stroke="white" stroke-width="10" />
            </svg>
            ,
            heading: "Dostava hrane",
            description: `Nudimo dostavu hrane direktno na vašu adresu. Mi ćemo se brinuti za svaku pojedinost i 
            osigurati da vaša hrana bude dostavljena na vrijeme.`
        }
    ]
}


export default FeaturesSection

/* 
Redovno organizujemo specijalne događaje poput degustacija vina, kuharskih klasa i noći sa živom muzikom. Proverite našu web stranicu za nadolazeće događaje i pridružite nam se za jedinstveno iskustvo u restoranu */