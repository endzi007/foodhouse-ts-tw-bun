import Link from "next/link";
import React from "react";
import { assetUrlBuilder } from "../../helpers/assetUrlBuilder";
import { useInView } from 'react-intersection-observer';

interface heroSectionWithBackgroundImageProps {
    bg_image: string
    main_heading: string
    main_span: string
    cta: {
        label: string
        link: string
    }
}


export default function HeroSectionWithBackgroundImage(props: heroSectionWithBackgroundImageProps) {
    const { ref, inView, entry } = useInView({
    });
    return <section ref={ref}
        className={`beforeAnimation ${inView && "animateChild"} h-[100vh] relative overflow-hidden`}>
        <img
            loading="lazy"
            src={assetUrlBuilder(props.bg_image)}
            alt="Backgound image - restoran Foodhouse Berane"
            className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                    {/* removes the last word from heading */}
                    {props.main_heading.slice(0, props.main_heading.lastIndexOf(" "))}

                    <span className="text-primary-color-400">{" "}{props.main_span}</span>

                    {/* removes all words except last from heading */}
                    {props.main_heading.slice(props.main_heading.lastIndexOf(" "), props.main_heading.length)}
                </h1>
                <Link href={props.cta.link}
                    className="inline-block z-0 w-full px-4 py-2 my-4 text-sm font-medium text-white font-greatVibes capitalize transition-colors duration-300 transform bg-primary-color-600 rounded-md lg:w-auto hover:bg-primary-color-500 focus:outline-none focus:bg-primary-color-500">
                    {props.cta.label}
                </Link>
            </div>
        </div>
    </section>
}

HeroSectionWithBackgroundImage.defaultProps = {
    bg_image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    main_heading: "Build your new project",
    main_span: "Saas",
    cta: {
        label: "Pogledajte naš meni",
        link: "/cjenovnik"
    }
}