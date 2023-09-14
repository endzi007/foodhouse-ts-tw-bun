import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    label: string
    variant?: "primary" | "secondary" | "secondary-border" | "transparent"
    className?: string
}

const Button = (props: Props) => {
    const classes = twMerge("px-8 py-1 rounded-lg capitalize hover:opacity-70", props.className);
    switch (props.variant) {
        case 'primary':
            return <button className={classes + '  bg-primary-color text-gray-200 dark:text-black'}>{props.label}</button>
        case 'secondary':
            return <button className={classes + '  bg-secondary-color text-gray-200 dark:text-black'}>{props.label}</button>
        case 'secondary-border':
            return <button className={classes + ' border border-secondary-color text-secondary-color'}>{props.label}</button>
        case 'transparent':
            return <button className={classes + '  border-primary-color text-primary-color'}>{props.label}</button>
        default:
            return <button className={classes + ' border border-primary-color  text-primary-color'}>{props.label}</button>

    }
}

export default Button;