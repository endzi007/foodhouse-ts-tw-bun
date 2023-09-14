import React from 'react'

interface Icon {
    src: string,
    alt: string
}
interface Props{
    id: string,
    image: string,
    icon: Icon,
    title: string,
    description: string
}
const CardWithIcon:React.FC<Props> = ({ id, icon, title, description }) => {
    return (
        <div className="flex flex-col p-6">
            <div className='w-[90px] p-5 aspect-square overflow-hidden bg-primary-color bg-opacity-5'>
                <img className='w-full h-full object-contain' src={icon.src} alt={icon.alt} />
            </div>
            <div className="flex mt-6 space-x-3 ">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl poppins">Crafted for Startups{title}</h1>
                    <p className="text-sm poppins">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardWithIcon;