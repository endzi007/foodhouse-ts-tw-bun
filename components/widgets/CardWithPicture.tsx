import React from 'react'

interface Props{
    id: string,
    image: string,
    icon: string,
    title: string,
    description: string
}
const CardItemWithPicture:React.FC<Props> = ({ id, image, icon, title, description }) => {
    return (
        <div className="transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            <div className="overflow-hidden rounded-2xl flex flex-grow aspect-video">
                <img className="w-full h-auto transform transition duration-700 hover:scale-125 object-cover" src={image} alt={title} />
            </div>
            <div className="flex mt-6 space-x-3 ">
                <div>
                    <img src={icon} alt={title} className="w-36" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl text-gray-800 poppins">{title}</h1>
                    <p className="text-sm text-gray-500 poppins">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardItemWithPicture;