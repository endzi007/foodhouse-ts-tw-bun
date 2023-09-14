import ContactFormWithBGImage from "../components/sections/contactFormWithBGImage";
import { CONTACT_PAGE } from "../data/endpoints";
export { getStaticProps } from './index';

export default function ContactPage(props: any) {
    return <ContactFormWithBGImage {...props.data.contact} />
}

