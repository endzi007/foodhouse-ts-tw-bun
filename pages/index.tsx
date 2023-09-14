
import React from 'react'
import CtaSection from '../components/sections/heroSection'
import FeaturesSection from '../components/sections/featuresSection'
import HeroSectionWithBackgroundImage from '../components/sections/heroSectionWithBackgroundImage';
import DostavaHrane from '../components/sections/dostavaHrane';
import Ketering from '../components/sections/ketering';
import fs from 'fs'
import path from 'path'
import Image from 'next/image';
import FoodGallery from '../components/sections/gallery';
import { useCollapsableModal } from '../components/building-blocks/modal';


export default function HomePage(props: any) {
  const { currentImageIndex, setCurrentImageIndex, setShowModal, showModal, openModal } = useCollapsableModal()
  return (
    <>
      <HeroSectionWithBackgroundImage
        {...props.data.homepage[props.data.homepage.findIndex((comp: any) => comp.map_to_component === "HeroSectionWithBackgroundImage")]}
      />
      <FeaturesSection
        {...props.data.homepage[props.data.homepage.findIndex((comp: any) => comp.map_to_component === "FeaturesSection")]}
      />
      <CtaSection
        {...props.data.homepage[props.data.homepage.findIndex((comp: any) => comp.map_to_component === "CtaSection")]}
      />
      <Ketering {...props.data.homepage[props.data.homepage.findIndex((comp: any) => comp.map_to_component === "UslugeKeteringa")]} />
      <DostavaHrane {...props.data.homepage[props.data.homepage.findIndex((comp: any) => comp.map_to_component === "DostavaHrane")]} />
      <FoodGallery items={props.data.pictures} />

    </>
  )
}

export async function getStaticProps(context: any) {
  try {
    const filePath = path.join(process.cwd(), "data", context.locale === "sr" ? "data_sr.json" : "data_en.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonData);

    return {
      props: {
        data: context.locale === "sr" ? data : data
      }
    }
  } catch (error) {
    return {
      props: {
        data: []
      }
    }
  }

}

