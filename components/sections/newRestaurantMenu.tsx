import { useRouter } from 'next/router';
import React, { useState } from 'react';
import SinglePricingItem from '../widgets/singlePricingItem';
import { useInView } from "react-intersection-observer";
import { MenuItem } from '../../pages/cjenovnik';
import Tabs from '../building-blocks/newTabs';
import FoodGalleryButton, { GalleryItems } from './galleryButton';


export interface Props {
    main_heading: string
    descriptions: string
    tabsSr: string[]
    tabsEn: string[]
    menuItems: MenuItem[]
    pictures: GalleryItems
    galleryButton: string
}

export interface menuItems {
    item_name_sr: string
    item_name_en: string
    item_price: string
    featured_image: {
        url: string
    }
    id: string | number
    categories: string[]
}
const RestaurantMenu: React.FC<Props> = (props) => {
    const [currentTab, setCurrentTab] = useState<string>(props.tabsSr[0]);
    const [currentTabs, setCurrentTabs] = useState<string[]>([]);
    const router = useRouter();
    const { ref, inView, entry } = useInView({})
    let x = 0; //this value is used for animation delay 
    return <section ref={ref} className={`w-full py-20 pt-[100px] flex flex-col items-center beforeAnimation ${inView && "animateChild"}`}>
        <h1 className='tracking-widest capitalize mb-3'>{props.main_heading}</h1>
        <h2 className='font-greatVibes text-primary-color mb-3 font-thin'>{props.descriptions}</h2>
        <hr className='bg-primary-color w-[100px] h-[2px] border-transparent' />
        <div className='self-stretch flex items-center justify-center max-w-full'>
            <Tabs tabsEn={props.tabsEn} tabs={props.tabsSr} currentTabs={currentTabs} setCurrentTab={(str) => {
                setCurrentTab(props.tabsSr[props.tabsSr.findIndex(tab => tab === str)]);
            }}
                setCurrentTabs={(str) => {
                    if (currentTabs.indexOf(str) === -1) {
                        setCurrentTabs([...currentTabs, str])
                    } else {
                        let tempArr = currentTabs.filter(tag => tag !== str)
                        setCurrentTabs([...tempArr])
                    }
                }}
            />
        </div>

        <FoodGalleryButton buttonText={props.galleryButton} items={props.pictures} />

        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-3 opacity-0 animateAllChild flex-wrap break-words overflow-hidden`}>

            {currentTabs.length === 0 && props.menuItems!.map((menuItem, i) => {
                return <SinglePricingItem
                    key={"menuitem_" + i}
                    item_name={router.locale === "sr" ? menuItem.item_name_sr : menuItem.item_name_en}
                    item_price={menuItem.item_price}
                    className=''
                    featured_image={menuItem.featured_image || "cjenovnik_slike/placeholder.webp"} // Promena ovde
                    categories={router.locale === "sr" ? menuItem.categories_sr : menuItem.categories_en} // Promena ovde
                    index={i}
                />
            })}

            {/* filter by tags */}
            {currentTabs.length > 0 && props.menuItems!.map((menuItem, i) => {
                //treba da pregledam svaki item fajl i utvrdim da li je indeks neke od selektovanih tagova
                let arrOfMatches = menuItem.categories_sr.some(catsr => {
                    if (currentTabs.indexOf(catsr) !== -1) return catsr;
                })

                let index = menuItem.categories_sr.findIndex((cat: any) => cat === currentTab);

                if (arrOfMatches) {
                    x++;

                    return <SinglePricingItem
                        key={"menuitem_" + i}
                        item_name={router.locale === "sr" ? menuItem.item_name_sr : menuItem.item_name_en}
                        item_price={menuItem.item_price}
                        className=''
                        featured_image={menuItem.featured_image || "cjenovnik_slike/placeholder.webp"} // Promena ovde
                        categories={menuItem.categories_sr}
                        index={x}
                    />

                } else {
                    return null;
                }
            })}


        </div>
    </section>



}

export default RestaurantMenu;