import Link from "next/link";
import { useInView } from 'react-intersection-observer'
const ctaSectionProps: ctaSectionProps = {

    main_heading: "Ne čekajte - pozovite nas",
    description: `Ne čekajte više, rezervišite sada i probajte najbolja jela u gradu. 
    Prihvatamo rezervacije za ručak, večeru i vikend doručak, tako da ne propustite priliku da jedete sa nama. 
    Kliknite na dugme ispod da rezervišete sto i uživate u nezaboravnom obroku.`,
    cta: {
        label: "View menu",
        url: "/cjenovnik"
    }

}

export type ctaSectionProps = {
    main_heading?: string
    description?: string
    cta?: {
        label?: string
        url?: string
    }
};

const CtaSection: React.FC<ctaSectionProps> = (props) => {
    const { ref, inView, entry } = useInView({ threshold: 0.1})
    return <section className="bg-white dark:bg-gray-900" ref={ref} >
        <div className={`container flex flex-col items-center px-4 py-12 mx-auto text-center beforeAnimation ${inView && "animateChild"}`}>
            <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-primary-color-800 xl:text-4xl dark:text-primary-color-200">
                {props.main_heading}
            </h2>
            <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                {props.description}
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
                <Link
                    href={props?.cta?.url || ""}
                    className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-primary-color-600 rounded-lg hover:bg-primary-color-500 focus:ring focus:ring-primary-color-300 focus:ring-opacity-80"
                >
                    {props?.cta?.label || ""}
                </Link>
            </div>
        </div>
    </section>
}

CtaSection.defaultProps = ctaSectionProps;
export default CtaSection;