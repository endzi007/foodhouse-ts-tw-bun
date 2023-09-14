import { Router } from "next/router";
import React from "react";
import { MenuItem } from "../../pages/cjenovnik";
import SinglePricingItem from "./singlePricingItem";

interface Props {
    locale: string,
    items: MenuItem[]
}

export default function GroupWrapper(props: Props) {

    return <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div>
            <h1>Tab</h1>
            {props.items.map((menuItem, i) => {
                return <SinglePricingItem
                    key={"menuitem_" + i}
                    item_name={props.locale === "sr" ? menuItem.item_name_sr : menuItem.item_name_en}
                    item_price={menuItem.item_price}
                    className=''
                    featured_image={menuItem.featured_image || undefined} // Promena ovde
                    categories={menuItem.categories_sr}
                    index={i}
                />
            })}
        </div>
        <div className="flex items-center justify-center" style={{ clipPath: "polygon(12% 92%, 5% 74%, 19% 47%, 14% 30%, 21% 14%, 39% 14%, 51% 7%, 69% 19%, 85% 25%, 95% 38%, 84% 54%, 75% 76%, 91% 93%, 55% 86%, 39% 98%)" }}>
            <img className="w-full" src="/29f187da-d629-4293-9364-193b0fcf5330.webp" alt="" />
        </div>
    </div>
}