import type { NextPage } from 'next'
import Head from 'next/head'
import path from 'path';
import fs from 'fs';
import Papa from 'papaparse';
import RestaurantMenu, { menuItems } from '../components/sections/newRestaurantMenu';
import { GalleryItems } from '@/components/sections/galleryButton';

const CjenovnikPage: NextPage = (props: any) => {
    console.log(props, "props");
    return (
        <section
            className={`flex min-h-screen flex-col items-center justify-center 
                    py-2 dark:text-white bg-gray-900 w-[100vw] pt-[85px]`}
        >
            <Head>
                <title>Food House | Cjenovnik</title>
            </Head>

            <div className="mx-auto w-full container flex flex-1 flex-col items-center justify-center text-center">
                {props.tabItemsSr.length > 0 && <RestaurantMenu
                    menuItems={props.menuItems}
                    tabsSr={props.tabItemsSr}
                    tabsEn={props.tabItemsEn}
                    descriptions={props.staticText.description}
                    main_heading={props.staticText.main_heading}
                    pictures={props.pictures}
                    galleryButton={props.staticText.galleryButton}
                /> || "loading"
                }
            </div>

        </section>
    )
}


// This function is used to fetch and process data at build time in Next.js
export async function getStaticProps(context: any) {
    try {
        // Define the path to the CSV file
        const csvFile = path.join(process.cwd(), "data", "foodhouse.csv");

        // Read the CSV file data as a UTF-8 string
        const csvData = fs.readFileSync(csvFile, "utf8");

        // Parse the CSV data into a JSON object with headers as keys and enable dynamic typing
        const resoults = Papa.parse(csvData, { header: true, dynamicTyping: true });

        // Type cast the parsed data to an array of MenuItem objects
        const getItems: MenuItem[] = resoults.data as MenuItem[];

        // Initialize arrays to hold the Serbian and English categories
        let categories_sr: string[] = [];
        let categories_en: string[] = [];

        // Transform the items by splitting category strings into arrays and accumulating all categories
        const itemsTransformed = getItems.map((item: any) => {
            // If the Serbian categories property is undefined, return null
            if (item.categories_sr === undefined) return null;

            // Split English category string into an array and trim whitespace from each category
            let enCategories = item.categories_en.split(",").map((cat: string): string => cat.trim());

            // Split Serbian category string into an array and trim whitespace from each category
            let srCategories = item.categories_sr.split(",").map((cat: string): string => cat.trim());

            // Accumulate Serbian and English categories into their respective arrays
            categories_sr = [...categories_sr, ...srCategories];
            categories_en = [...categories_en, ...enCategories];

            // Return the modified item with categories as arrays instead of strings
            return {
                ...item,
                categories_sr: srCategories,
                categories_en: enCategories
            };
        });

        // Filter out null values from the transformed items array
        const filteredItems = itemsTransformed.filter(item => item !== null);

        // Create arrays of unique Serbian and English categories
        const categories_sr_unique = Array.from(new Set(categories_sr));
        const categories_en_unique = Array.from(new Set(categories_en));

        // Get the pictures data from json file 
        const allData = path.join(process.cwd(), "data", context.locale === "sr" ? "data_sr.json" : "data_en.json");

        // Read the CSV file data as a UTF-8 string
        const allDataData = JSON.parse(fs.readFileSync(allData, "utf8"));

        const pictures: GalleryItems = allDataData.pictures;

        // Return the processed data as props to be passed to the page component
        return {
            props: {
                menuItems: filteredItems,
                tabItemsSr: categories_sr_unique,
                tabItemsEn: categories_en_unique,
                pictures: pictures,
                staticText: allDataData.cjenovnik
            }
        };
    } catch (error) {
        // In case of an error, return empty arrays as props
        return {
            props: {
                menuItems: [],
                tabItems: []
            }
        };
    }
}


interface Props {
    tabItems: string[]
    menuItems: MenuItem[]
}

export default CjenovnikPage


export interface MenuItem {
    item_name_sr: string;
    item_name_en: string;
    item_slug: string;
    item_price: string;
    categories_sr: string[];
    categories_en: string[];
    featured_image: null | string;
    description: null | string;
    description_en: null | string;
}
