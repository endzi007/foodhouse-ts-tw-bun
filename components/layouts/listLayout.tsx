import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    className: string,
    items: any[],
    dataMapper: any,
    Component: any
}

const ListLayout:React.FC<Props> = (props) => {
    return <div className={twMerge("w-full flex flex-col", props.className)}>
        {props.items.map((item, i) => {
            const data = props.dataMapper !== undefined ? props.dataMapper(item) : item;
            return <props.Component {...data} index={i} key={"component__" + i} />
        })}
    </div>
}

export default ListLayout;

