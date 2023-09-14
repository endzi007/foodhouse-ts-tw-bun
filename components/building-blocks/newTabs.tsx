import { useRouter } from 'next/router';
import React from 'react';
import { tab } from '../../lib/cjenovnikAtoms';
export interface Props {
    setCurrentTab: (tab: string) => void
    currentTabs: string[]
    setCurrentTabs: (tab: string) => void
    tabs: string[]
    tabsEn: string[]
}

const Tabs = (props: Props) => {
    const buttons: string[] = props.tabs;
    const router = useRouter();

    return <div className='flex flex-wrap w-full justify-center gap-3 p-5 font font-Oswald'>
        {
            buttons.map((button, i) => {
                return <button key={button + "_" + i} className={`box-border flex items-center justify-between px-7 uppercase py-2 text-gray-800 ${props.currentTabs.indexOf(button) !== -1 ? "bg-primary-color dark:text-black" : "dark:text-gray-200 border border-primary-color"}`}
                    onClick={() => {
                        props.setCurrentTabs(button);
                        props.setCurrentTab(button);
                    }}>
                    <p>{router.locale === "sr" ? button : props.tabsEn[i]}</p>
                    {props.currentTabs.indexOf(button) !== -1 &&
                        <img className='ml-3 w-3 h-3' src='/remove.png' alt='remove' />
                    }
                </button>
            })
        }
    </div>
}

export default Tabs;