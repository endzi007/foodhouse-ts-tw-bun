export default function NothingFoundPage(props: any) {
    return <p>This is 404 page.. Nothing found</p>
}
export async function getStaticProps() {
    return {
        props: {}
    }
}