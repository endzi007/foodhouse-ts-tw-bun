import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    icon: React.ReactNode
    variant?: "primary" | "secondary" | "secondary-border" | "transparent"
    className?: string
    onClick?: (e: React.SyntheticEvent) => void
}

const IconButton = (props: Props) => {
    const classes = twMerge("px-8 py-1 rounded-lg capitalize hover:opacity-70", props.className);
    const icon = props.icon || <>menu</>;

    switch (props.variant) {
        case 'primary':
            return <button onClick={props.onClick} className={classes + '  bg-primary-color text-gray-200 dark:text-black'}>{icon}</button>
        case 'secondary':
            return <button onClick={props.onClick} className={classes + '  bg-secondary-color text-gray-200 dark:text-black'}>{icon}</button>
        case 'secondary-border':
            return <button onClick={props.onClick} className={classes + ' border border-secondary-color text-secondary-color'}>{icon}</button>
        case 'transparent':
            return <button onClick={props.onClick} className={classes + '  border-primary-color text-primary-color'}>{icon}</button>
        default:
            return <button onClick={props.onClick} className={classes + ' border border-primary-color  text-primary-color'}>{icon}</button>

    }
}

export default IconButton;