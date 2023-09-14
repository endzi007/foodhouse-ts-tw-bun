import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface Props {
    map_to_component: string;
    bg_image: string;
    main_heading: string;
    main_span: string;
    paragraf: string;
    cta: {
        label: string;
        link: string;
    };
}

export default function DostavaHrane(props: Props) {
    const { ref, inView, entry } = useInView({ threshold: 0.1 })
    return <section ref={ref} className="w-full mx-auto dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div
            className={`container overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:flex-row lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl beforeAnimation ${inView && "animateChild"} `}>
            <div className="lg:w-1/2 lg:order-2 max-h-[300px] overflow-hidden">
                <img loading="lazy" className="object-fill" src="/dostava.jpg" alt="dostava hrane - Restoran Foodhouse Berane" />
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 lg:order-1">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                    {props.main_heading} <span className="text-primary-color">{props.main_span}</span>
                </h2>

                <p className="mt-4 text-gray-500 dark:text-gray-300">{props.paragraf}</p>

                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <Link href={props.cta.link} className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-primary-color rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        {props.cta.label}
                    </Link>
                </div>
            </div>
        </div>
    </section>
}