import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "secondary-border" | "transparent"
    className?: string
    tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "span"
}

const TextComponent = (props: Props) => {
    let CustomTag = props.tag;
    switch (props.variant) {
        case 'primary':
            return <CustomTag className={twMerge("text-primary-color", props.className)}>{props.children}</CustomTag>
        case 'secondary':
            return <CustomTag className={twMerge('text-secondary-color', props.className)}>{props.children}</CustomTag>
        default:
            return <CustomTag className={twMerge('text-gray-800 dark:text-gray-200', props.className)}>{props.children}</CustomTag>

    }
}

export default TextComponent;