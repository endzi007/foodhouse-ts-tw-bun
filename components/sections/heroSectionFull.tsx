import Link from 'next/link';
import React from 'react';

const ctaSectionProps: heroSectionProps = {
    main_heading: "Restoran Foodhouse Berane",
    sub_heading: "Cooking with love",
    description: `Dobrodošli u FoodHouse, mesto gde možete uživati u domaćoj kuhinji i 
    ukusu priznatom i prepoznatom. Naš meni sadrži širok spektar ukusnih jela. 
    Posjetite nas i vidite zašto smo najbolji restoran ovog tipa u gradu.`,
    cta_button_1: {
        label: "View menu",
        url: "/cjenovnik"
    },
    /* bg_image: "https://foodhouse-backend.caprover.jasarovic.xyz/uploads/hero_image_2509f77b6b.webp?updated_at=2023-01-05T21:51:40.814Z"
     */bg_image: "https://foodhouse-backend.caprover.jasarovic.xyz/uploads/restaurant_caedc5626c.webp?updated_at=2023-01-13T06:55:35.767Z"

}

export interface heroSectionProps {
    main_heading: string
    sub_heading: string
    description: string
    cta_button_1: {
        label: string
        url: string
    }
    bg_image: string
}



const HeroSectionFull: React.FC<heroSectionProps> = (props) => {
    return <section className="bg-white dark:bg-gray-900"
    /* style={{
        backgroundImage: "url(https://foodhouse-backend.caprover.jasarovic.xyz/uploads/hero_image_2509f77b6b.webp?updated_at=2023-01-05T21:51:40.814Z)"
    }} */
    >
        <div className="lg:flex">
            <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                        {props.main_heading}{" "}
                    </h2>
                    <h3 className="text-2xl font-Macondo text-primary-color-800 dark:text-primary-color-200 lg:text-3xl pt-3">
                        {props.sub_heading}{" "}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                        {props.description}
                    </p>
                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <Link
                            href={props?.cta_button_1?.url || ""}
                            className="block px-6 py-2.5 text-sm font-medium tracking-wider text-center bg-primary-color text-white uppercase transition-colors duration-300 transform rounded-md hover:bg-primary-color-700"
                        >
                            {props?.cta_button_1?.label || ""}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-64 lg:w-1/2 lg:h-auto ">
                <div
                    className="w-full h-full bg-cover object-fit -z-1"
                    style={{
                        backgroundImage:
                            `url(${props.bg_image})`
                    }}
                >
                    <div className="w-full h-full bg-black opacity-25" />
                </div>
            </div>
        </div>
    </section>

}


HeroSectionFull.defaultProps = ctaSectionProps;
export default HeroSectionFull;