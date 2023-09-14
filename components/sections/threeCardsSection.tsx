import React from 'react';

const ThreeCardSection = () => {
    return <div className="websitePadding grid md:grid-cols-3 lg:-mt-28 h-auto min-h-[15em]">
        <SingleCard />
        <SingleCard primary={true} />
        <SingleCard />
    </div>

}

export default ThreeCardSection;

const SingleCard = (props: { primary?: boolean }) => {

    return <div className={`grid grid-cols-1-2 sm:grid-cols-1 p-7 sm:px-4 relative overflow-hidden ${props.primary ? "bg-primary-color" : "bg-gray-900"} text-gray-200`}>
        <div className={`flex self-center justify-self-center rounded-full p-2 text-gray ${props.primary ? "bg-gray-900" : "bg-primary-color"}`}>
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="border-current text-5xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg>
        </div>
        <div
            style={{ width: "150%", height: "150%" }}
            className="top-0 left-0 absolute bg-white opacity-10 h- transform translate-x-1/3 translate-y-3 rotate-12"
        />
        <div>
            <h4 className="text-3xl mb-5 text-white">
                Kvalitet kojem možete verovati
            </h4>
            <p className="text-bg-black-contrast-text">
                ElegantStone pruža najbolji kvalitet proizvoda, korisničku podršku i
                podršku u regionu.
            </p>
        </div>
    </div>
}