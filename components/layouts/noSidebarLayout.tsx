import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { assetUrlBuilder } from '../../helpers/assetUrlBuilder';
import { AppBar } from '../sections';
import { SingleLanguage } from '../widgets/LanguageSwitcher';
import { useAtom } from 'jotai';
import { generalAppInfo, generalInfoAtom } from '../../lib/atoms';
import { mobileMenuAtom } from '../../lib/uiAtoms';
import MenuIcon from '../pictures-images/menuIcon';
import CloseMenuIcon from '../pictures-images/closeMenuIcon';
import { useRouter } from 'next/router';
interface Props {
    className?: string
    children: React.ReactNode
    generalAppInfo: generalAppInfo
}

const navPages = [
    {
        id: 1,
        label_sr: "Početna",
        label_en: "Home",
        link: "/",
        locale: ""
    }, {
        id: 2,
        label_sr: "Cjenovnik",
        label_en: "Menu",
        link: "/cjenovnik",
        locale: ""
    }, {
        id: 3,
        label_sr: "Kontakt",
        label_en: "Contact",
        link: "/contact"
    }
]


const NoSidebar: React.FC<Props> = ({ children, generalAppInfo }) => {

    const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom)
    const router = useRouter();
    useEffect(() => {
        setShowMobileMenu(false);
    }, [router.asPath])

    return <div className={"dark"}>
        <AppBar
            links={navPages}
            logo={<img src={generalAppInfo.logo_img!} alt={"logo"} />}
            languageSwitcher={[
                { code: "sr", icon: <img className='max-w-[30px]' src="/sr.png" />, label: "MNE" },
                { code: "en", icon: <img className='max-w-[30px]' src="/en.png" />, label: "EN" }
            ]}
            menuIcon={showMobileMenu ? <MenuIcon /> : <CloseMenuIcon />}
            onChangeLanguageHandler={function (lang: SingleLanguage): void {
                setShowMobileMenu(false);
            }}
            onClickHandler={function (e: React.SyntheticEvent<Element, Event>): void {
                setShowMobileMenu(!showMobileMenu);
            }}
            LinkComponent={Link}
            showMobileMenu={showMobileMenu}

        />
        {/* <MobileHeader /> */}
        <div className='mx-auto overflow-x-hidden'>
            {children}
        </div>

        <footer className='bg-white dark:bg-gray-900 dark:text-gray-100 text-black'>
            <div className="flex flex-col items-center justify-center py-2">
                <p className="text-sm text-gray-500">© 2023 Food House. All rights reserved.</p>
                <p>{"Email: " + generalAppInfo.primary_email}</p>
                <p>{"Phone: " + generalAppInfo.primary_phone_number}</p>
            </div>
        </footer>
    </div>
}

export default NoSidebar;