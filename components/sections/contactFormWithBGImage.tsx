import { useInView } from 'react-intersection-observer'
import { assetUrlBuilder } from "../../helpers/assetUrlBuilder";

const defaultProperties = {
    main_heading: "Ultimate design solution",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
    quo aliquid molestiae hic incidunt beatae placeat accusantium! Alias
    ex quisquam ab tempora. Ratione autem doloremque ducimus numquam
    doloribus, error sed.`,
    button_text: "get in touch",
    social_heading: "Follow us",
    bg_image: "/uploads/hero_image_2509f77b6b.webp?updated_at=2023-01-05T21:51:40.814Z",
    social_media_links: [{
        link: "instagram",
        icon: "/"
    }],
    contact_form: {
        button_input: "Get in Touch",
        message_input: "Message",
        email_input: "your email",
        name_input: "your name",
        heading: "Contact us",
        description: "Ask us everything and we would love to hear from you",
        email_placeholder: "enter your email",
        name_placeholder: "enter your name",
        message_placeholder: "enter your message"
    }
}

export default function ContactFormWithBGImage(props: typeof defaultProperties) {
    const { ref, inView, entry } = useInView({})
    return <section
        className="min-h-screen bg-cover pt-[85px] bg-gray-900"
        style={{
            backgroundImage: `url("${props.bg_image}")`,
            backgroundPositionY: "bottom",
            backgroundPositionX: "right",
        }}
    >
        <div className="flex flex-col min-h-screen" ref={ref}>
            <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div className={`text-white lg:w-1/2 lg:mx-6 beforeAnimation ${inView && "animateChild"} bg-gray-900/50 p-3 rounded-lg `} >
                        <h1 className="text-3xl font-semibold capitalize lg:text-4xl">
                            {props.main_heading}
                        </h1>
                        <p className="max-w-xl mt-6">
                            {props.description}
                        </p>
                        <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary-color-600 rounded-md hover:bg-primary-color-500 focus:outline-none focus:ring focus:ring-primary-color-400 focus:ring-opacity-50">
                            {props.button_text}
                        </button>
                        <div className={`mt-6 md:mt-8 beforeAnimation ${inView && "animateChild"}`}>
                            <h3 className="text-gray-300 ">{props.social_heading}</h3>
                            <div className="flex mt-4 -mx-1.5 ">
                                {props.social_media_links.map((link: any) => {
                                    return <a
                                        target="_blank"
                                        className="mx-1.5 bg-white rounded-lg opacity-50 transition-colors duration-300 transform hover:text-primary-color-500"
                                        href={link.link}
                                    >

                                        <img src={assetUrlBuilder(link.icon)} alt={link.link} />
                                    </a>

                                })}
                            </div>
                        </div>
                    </div>
                    <div className={`mt-8 lg:w-1/2 lg:mx-6`}>
                        <div className={`w-full px-8 py-10 mx-auto overflow-hidden bg-white 
                        shadow-2xl rounded-xl dark:bg-gray-900/60 lg:max-w-xl  ${inView && "animateChild"}`}>
                            <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">
                                {props.contact_form.heading}
                            </h1>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                {props.contact_form.description}

                            </p>
                            <form className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        {props.contact_form.name_input}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={props.contact_form.name_placeholder}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary-color-400 focus:ring-primary-color-300 focus:ring-opacity-40 dark:focus:border-primary-color-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        {props.contact_form.email_input}
                                    </label>
                                    <input
                                        type="email"
                                        placeholder={props.contact_form.email_placeholder}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary-color-400 focus:ring-primary-color-300 focus:ring-opacity-40 dark:focus:border-primary-color-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        {props.contact_form.message_input}
                                    </label>
                                    <textarea
                                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary-color-400 focus:ring-primary-color-300 focus:ring-opacity-40 dark:focus:border-primary-color-300 focus:outline-none focus:ring"
                                        placeholder={props.contact_form.message_placeholder}
                                        defaultValue={""}
                                    />
                                </div>
                                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary-color-600 rounded-md hover:bg-primary-color-500 focus:outline-none focus:ring focus:ring-primary-color-400 focus:ring-opacity-50">
                                    {props.contact_form.button_input}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='bg-gray-900 p-5'>
            <div className='mx-auto container h-96 overflow-hidden'>
                <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2459.91952868839!2d19.872246085633964!3d42.84426197925995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135293af101060f7%3A0x735e2006009c72e6!2sFOODHOUSE%20cooking%20with%20love!5e0!3m2!1sen!2s!4v1689845048255!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </section>
    </section>

}

ContactFormWithBGImage.defaultProps = defaultProperties;
