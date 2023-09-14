
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export type GalleryItems = {
    original: string
    thumbnail: string
}[]


export default function FoodGalleryButton({ items, buttonText }: { items: GalleryItems, buttonText: string }) {
    const [open, setOpen] = useState(false);
    const modifiedItems = items.map(item => ({ src: item.original }))
    return (
        <div className="w-full">
            <button onClick={() => setOpen(true)}
                className="w-full bg-primary-color capitalize rounded-2xl font-greatVibes text-2xl py-2">
                {buttonText}</button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={modifiedItems}
                index={0}
            />
        </div>
    );
}