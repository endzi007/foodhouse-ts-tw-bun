import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    main_heading: string,
    description: string,
    className: string, 
    items: any[],
    dataMapper: any,
    Component: any
}

const GridLayout:React.FC<Props> = (props) => {
    return <div className="max-w-screen-xl mx-auto my-12 px-6">
            <h1 className="text-4xl poppins pb-4">{props.main_heading}</h1>
            <p className="text-gray-500 text-sm poppins w-2/4">{props.description}</p>
            <div className={twMerge(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8"`, props.className)}>
                {props.items.map((item, i) => {
                    const data = props.dataMapper !== undefined ? props.dataMapper(item) : item;
                    return <props.Component {...data} index={i} key={"component__" + item.id || i} />
                }
                )}
            </div>
        </div>
}

export default GridLayout;