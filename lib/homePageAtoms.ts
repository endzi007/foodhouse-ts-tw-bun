import { atom } from 'jotai';

export interface heroSection {
    id: string | number,
    main_heading?: string,
    small_heading?: string,
    description?: string,
    title?: string,
    coverImage?: string,
    cto: []
}


export const heroSectionAtom = atom([]);