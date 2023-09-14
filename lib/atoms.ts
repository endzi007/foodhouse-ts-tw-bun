import { atom } from 'jotai';

export const generalInfoAtom = atom<generalAppInfo>(
    {
        id: "",
        website_title: "",
        website_subtitle: "",
        primary_email: "",
        primary_phone_number: "",
        primary_address: "",
        social_links: [{ id: 0, link: "", name: "", icon: "" }],
        logo_img: ""
    }
)

export interface social_link {
    id: number
    name: string
    link: string
    icon?: string
}

export interface generalAppInfo {
    id: string | number
    website_title: string
    website_subtitle: string
    primary_email: string
    secondary_email?: null,
    primary_phone_number: string
    secondary_phone_number?: string
    primary_address: string
    logo_url?: null
    favicon_url?: null
    logo_img: string
    social_links: social_link[]
}