import '../styles/globals.css'
import NoSidebar from '../components/layouts/noSidebarLayout'
import Head from 'next/head';
import data_sr from '../data/data_sr.json';
import data_en from '../data/data_en.json';

function MyApp({ Component, pageProps, props }: { Component: any, pageProps: any, props: any }) {
  return <NoSidebar generalAppInfo={props.generalAppInfo}>
    <Head>
      <title>{props.seo.title}</title>
      <meta name="description" content={props.seo.description} />
      <meta name="keywords" content={props.seo.keywords} />
      <link rel="canonical" href="https://foodhouseberane.me/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* <!-- Open Graph Tags --> */}
      <meta property="og:title" content={props.seo.og.title} />
      <meta property="og:description" content={props.seo.og.description} />
      <meta property="og:url" content={props.seo.og.url} />
      <meta property="og:type" content={props.seo.og.type}></meta>
      {/* <!-- Twitter Card Tags --> */}
      <meta name="twitter:title" content={props.seo.twitter.title} />
      <meta name="twitter:description" content={props.seo.twitter.description} />
      <meta name="twitter:card" content={props.seo.twitter.card} />

      <link rel='icon' href="/fav.ico" />
    </Head>
    <Component {...pageProps} />
  </NoSidebar>
}

MyApp.getInitialProps = async ({ ctx }: { ctx: any }) => {

  let generalAppInfo, seo;
  try {
    if (ctx.locale === "sr") {
      generalAppInfo = data_sr['general-app-info'];
      seo = data_sr.seo;
    } else {
      generalAppInfo = data_en['general-app-info'];
      seo = data_en.seo;
    }
  } catch (error) {
    console.log(error, "error");
    generalAppInfo = {};
  }

  return {
    props: {
      generalAppInfo,
      seo,
    },
  };
};

export default MyApp



interface CTA {
  label: string;
  link: string;
}

interface HomepageSection {
  map_to_component: string;
  bg_image?: string;
  main_heading: string;
  main_span?: string;
  cta: CTA;
  features?: Array<HomepageFeature>;
}

interface HomepageFeature {
  icon: string;
  heading: string;
  description: string;
}

interface CtaSection {
  map_to_component: string;
  main_heading: string;
  description: string;
  cta: CTA;
}

interface DostavaHrane {
  map_to_component: string;
  bg_image: string;
  main_heading: string;
  main_span: string;
  paragraf: string;
  cta: CTA;
}

interface UslugeKeteringa {
  map_to_component: string;
  bg_image: string;
  main_heading: string;
  main_span: string;
  paragraf: string;
  cta: CTA;
}

interface ContactMediaLink {
  link: string;
  icon: string;
}

interface ContactForm {
  button_input: string;
  message_input: string;
  email_input: string;
  name_input: string;
  heading: string;
  description: string;
  email_placeholder: string;
  name_placeholder: string;
  message_placeholder: string;
}

interface ContactSection {
  map_to_component: string;
  main_heading: string;
  description: string;
  button_text: string;
  social_heading: string;
  bg_image: string;
  social_media_links: Array<ContactMediaLink>;
  contact_form: ContactForm;
}

interface GeneralAppInfo {
  id: number;
  website_title: string;
  website_subtitle: string;
  primary_email: string;
  secondary_email: string | null;
  primary_phone_number: string;
  secondary_phone_number: string | null;
  primary_address: string;
  logo_url: string | null;
  favicon_url: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  logo_img: string;
  social_links: Array<any>; // The actual data is not provided in the JSON
  favicon_img: string | null;
  header: Array<any>; // The actual data is not provided in the JSON
  footer: Array<any>; // The actual data is not provided in the JSON
  localizations: Array<any>; // The actual data is not provided in the JSON
}

interface SEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    url: string;
    type: string;
  };
  twitter: {
    title: string;
    description: string;
    card: string;
  };
}

interface JSONData {
  homepage: Array<HomepageSection>;
  cjenovnik: CtaSection;
  contact: ContactSection;
  "general-app-info": GeneralAppInfo;
  seo: SEO;
}
