import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAtom } from 'jotai';
import useDetectScroll from '../../helpers/useDetectScroll';
import IconButton from '../building-blocks/IconButton';
import MenuIcon from '../pictures-images/menuIcon';
import LanguageSwitcher, { SingleLanguage } from '../widgets/LanguageSwitcher';
import { mobileMenuAtom } from '../../lib/uiAtoms';

export type Link = {
    id: number
    label_sr: string
    label_en: string
    link: string
    locale?: string
}

export interface AppBarProps {
    links: Link[],
    logo: React.ReactNode
    searchText?: string
    LinkComponent?: React.ElementType
    languageSwitcher: SingleLanguage[],
    menuIcon: React.ReactNode
    onChangeLanguageHandler?: (lang: SingleLanguage) => void
    onClickHandler?: (e: React.SyntheticEvent) => void
    showMobileMenu: boolean
}


const AppBar = (props: AppBarProps = {
    links: [{ id: 1, label_sr: "Početna", label_en: "Home", link: "/" }],
    logo: undefined,
    languageSwitcher: [{ code: "sr", label: "MNE", icon: <></> }],
    menuIcon: <MenuIcon />,
    showMobileMenu: false
}) => {
    const router = useRouter();
    const [isScroll] = useDetectScroll();


    return <header
        className={`fixed border-b-white/10 border-b-[1px] top-0 w-full
    dark:text-white bg-gray-900 ${isScroll ? "lg:bg-gray-900" : "lg:bg-gray-900/20"}
     text-gray-900 z-10`}
    >
        <div className='container mx-auto relative'>
            <div className='flex flex-col lg:grid' style={{
                gridTemplateColumns: "auto clamp(150px, 180px, 200px)"
            }}
            >
                <div className="flex w-full justify-between min-h-16 mx-auto items-center">
                    {/* these are links */}
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        {props.links.map((link, i) => {
                            return <Link key={link.link + "_" + i} href={link.link}
                                className={`flex items-center px-4 py-2 -mb-1 border-b-2 text-white
                            ${link.link === router.asPath ? "border-primary-color" : "border-transparent"}`}>
                                {router.locale === "en" && link.label_en}
                                {router.locale !== "en" && link.label_sr}
                            </Link>
                        })}
                    </ul>

                    {/* this is the logo */}
                    <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="hidden lg:flex items-center p-2 text-primary-color max-w-[150px] object-contain">
                        {props.logo}
                    </Link>
                    {/* these is searchbox */}
                    <div className='hidden lg:block'></div>
                </div>
                <div className="hidden items-center justify-center lg:flex relative">
                    <LanguageSwitcher languages={props.languageSwitcher} onChangeLanguage={function (lang: SingleLanguage): void {
                        console.log('Function not implemented.');
                    }} />
                </div>
                {/* this is mobile menu*/}
                <ul className={`${props.showMobileMenu ? "flex" : "hidden"} bg-gray-900 flex-col w-full items-center mt-[70px] lg:hidden`}>
                    <li><Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="hidden lg:flex items-center p-2 text-primary-color max-w-[150px] object-contain">
                        {props.logo}
                    </Link></li>
                    {props.links.map((link, i) => {
                        return <li key={link.link + "_" + i} className=""><Link href={link.link} >
                            {router.locale === "en" && link.label_en}
                            {router.locale !== "en" && link.label_sr}
                        </Link></li>
                    })}
                    <li className='relative'>
                        <LanguageSwitcher horizontal={true} languages={props.languageSwitcher}
                            onChangeLanguage={function (lang: SingleLanguage): void {
                                props.onChangeLanguageHandler!(lang);
                            }} />
                    </li>
                </ul>
                <div className='lg:hidden bg-gray-900 absolute right-0 z-10 w-full flex justify-between'>
                    <div className='max-w-[100px] p-2'>
                        <Link href="/">
                            {props.logo}
                        </Link>
                    </div>
                    <IconButton onClick={props.onClickHandler} icon={props.menuIcon} variant="transparent" className=''></IconButton>
                </div>
            </div>
        </div>
    </header >
}

export default AppBar;