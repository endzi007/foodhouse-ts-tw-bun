import React from 'react';
import { twMerge } from 'tailwind-merge'

const SinglePricingItem: React.FC<Props> = (props) => {
    return <li style={{ "--i": props.index } as React.CSSProperties} className={twMerge('flex flex-row justify-between items-center p-2', props.className)}>
        <div className='z-2 w-14 h-14 flex-shrink-0 flex-grow-0 rounded-full bg-primary-color-900 mr-2 overflow-hidden border-2 border-primary-color'>
            <img
                loading='lazy'
                src={props.featured_image}
                alt="featured image"
                className='w-full h-full object-cover'
            />
        </div>
        <h6 className='text-left w-full break-words flex-grow-1 flex-shrink-1 pr-2 text-gray-800 dark:text-gray-100 '>
            {props.item_name}
        </h6>
        <div className='flex-grow-1 flex-shrink-1 w-full h-full absolute overflow-hidden opacity-60'>
            <div className={twMerge('z-1 w-full h-full top-0 left-[50px] border-b-[2px] border-b-primary-color border-dashed absolute -translate-y-[30%]', props.classNameBorder)}> </div>
        </div>
        <h6 className={twMerge('flex-grow-0 flex-shrink-0 pl-2 font-bold text-lg text-primary-color', props.classNamePrice)}>{Number.parseFloat(props.item_price).toFixed(2)}€</h6>
    </li>
}

export default SinglePricingItem;

interface Props {
    item_name: string,
    item_price: string,
    item_slug?: string,
    featured_image?: string,
    className?: string,
    classNameBorder?: string,
    classNamePrice?: string,
    categories: string[]
    index: string | number
}