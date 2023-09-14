
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";

export type GalleryItems = {
    original: string
    thumbnail: string
}[]


export default function FoodGallery({ items }: { items: GalleryItems }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0)
    const modifiedItems = items.map(item => ({ src: item.original }))

    return (
        <div className="w-full">
            <div className="grid grid-cols-4 gap-2">
                {items.map((item, i) => {
                    return (
                        <div className="aspect-w-1 aspect-h-1 bg-gray-500 overflow-hidden">
                            <img
                                className="w-full h-full object-cover max-h-48 transition transform hover:scale-110 cursor-pointer"
                                onClick={() => {
                                    setIndex(old => {
                                        return i;
                                    })
                                    setOpen(true)
                                }}
                                src={item.thumbnail}
                                alt="picture food"
                            />
                        </div>
                    );
                })}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={modifiedItems}
                index={index}
            />
        </div>
    );
}