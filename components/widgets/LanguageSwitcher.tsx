'use client';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export interface SingleLanguage {
    code: string
    label: string
    icon: React.ReactNode
}
export interface LanguageSwitcherProps {
    languages: SingleLanguage[]
    onChangeLanguage: (lang: SingleLanguage) => void
    horizontal?: boolean
}
const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const router = useRouter();

    const [selectedLaguage, setSelectedLanguage] = useState<number>(() => {
        const lang = props.languages.findIndex(lang => lang.code === router.locale);
        return lang === -1 ? 0 : lang;
    });

    const [open, setOpen] = useState<boolean>(false);
    const onClickHandler = (i: number) => {
        router.push(router.asPath, undefined, { locale: props.languages[i].code })
        setSelectedLanguage(i);
    };

    useEffect(() => {
        props.onChangeLanguage(props.languages[selectedLaguage]);
    }, [selectedLaguage]);

    const onClick = (e: any) => {
        setOpen(!open);
    }

    return <div className='flex flex-col flex-wrap max-h-full max-w-full hover:cursor-pointer relative' onClick={onClick}>
        {!props.horizontal && <div className='flex items-center align-middle p-2 justify-start'>
            <span className='p-1'>
                {props.languages[selectedLaguage].icon}
            </span>
            <span className="p-1">
                {props.languages[selectedLaguage].label}
            </span>
        </div>}
        { /* this is version for desktop */}
        {!props.horizontal && <div className={`absolute ${!open ? "hidden" : "visible"} -bottom-[100%] flex ${props.horizontal ? "flex-row" : "flex-col"} h-full z-50 min-w-full `}>
            {props.languages.map((language, i: number) => {
                return <div
                    onClick={(e) => {
                        onClickHandler(i)
                    }}
                    className='flex items-center p-2 bg-white dark:bg-gray-900'
                    key={language.label}
                >
                    <div className='flex items-center justify-between'>
                        <span className='mr-1'>{language.icon}</span>
                        {language.label}
                    </div>
                </div>
            })}
        </div>}
        { /* this is version for mobile */}
        {props.horizontal && <div className={`flex flex-row h-full z-50 min-w-full `}>
            {props.languages.map((language, i: number) => {
                return <div
                    onClick={(e) => {
                        onClickHandler(i)
                    }}
                    className='flex items-center p-2 bg-white dark:bg-gray-900'
                    key={language.label}
                >
                    <div className='flex items-center justify-between'>
                        <span className='mr-1'>{language.icon}</span>
                        {language.label}
                    </div>
                </div>
            })}
        </div>}

    </div>
}

export default LanguageSwitcher;