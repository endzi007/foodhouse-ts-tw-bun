import { useRouter } from 'next/router';
import React from 'react';
import { tab } from '../../lib/cjenovnikAtoms';
export interface Props {
    setCurrentTab: (tab: string) => void
    currentTab: string
    tabs: string[]
}

const Tabs = (props: Props) => {
    const buttons: string[] = props.tabs;
    const router = useRouter();
    return <div className='flex w-full justify-center gap-3 p-5 font font-Oswald'>
        {
            buttons.map((button, i) => {
                return <button key={button + "_" + i} className={`px-7 py-2 text-gray-800 dark:text-gray-200 ${props.currentTab === button ? "border border-primary-color" : "border"}`}
                    onClick={() => {
                        props.setCurrentTab(button);
                    }}>{router.locale === "sr" ? button : button}</button>
            })
        }
    </div>
}

export default Tabs;