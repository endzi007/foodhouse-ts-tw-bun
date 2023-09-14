import { atom } from 'jotai';

export const menuItemsAtom = atom<menuItems[]>([
    {
        item_name: "",
        item_price: "",
        id: "",
        featured_image: {
            url: ""
        },
        categories: [""]
    }
]);
export const tabItemsAtom = atom<tab[]>([{ label_sr: "sve", label_en: "all", value: "all" }]);


export interface Props {
    main_heading: string
    descriptions: string
    tabs: tab[]
    menuItems: menuItems[]
}

export type tab = {
    label_sr: string
    label_en: string
    value: string
}

export interface menuItems {
    item_name: string
    item_price: string
    featured_image: {
        url: string
    }
    id: string | number
    categories: string[]
}