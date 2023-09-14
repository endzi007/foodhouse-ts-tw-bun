import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
    children: React.ReactNode
    fullWidth?: boolean
    className?: string
    Separator?: React.ReactNode
}

const Container = (props: ContainerProps) => {
    const classesNotFull = `w-full m-auto relative lg:w-[80vw]`
    const classesFull = `w-full m-auto relative`
    return <section className={twMerge(props.fullWidth ? classesFull : classesNotFull, props.className)}>
        {props.Separator && <div className={`absolute top-0 left-0 w-full flex h-8 bg-transparent -translate-y-[100%]`}>
            {props.Separator}
        </div>
        }
        {props.Separator && <div className={`absolute bottom-0 left-0 w-full h-8 bg-transparent rotate-180 translate-y-[100%]`}>
            {props.Separator}
        </div>
        }

        {props.children}
    </section>
}

export default Container; 