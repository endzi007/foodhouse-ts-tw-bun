const URL = "https://foodhouseberane.me";

function generateSiteMap() {
     return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
       <!-- Add the static URLs manually -->
       <url>
            <loc>${URL}</loc>
       </url>
       <url>
            <loc>${URL}/cjenovnik</loc>
       </url>
        <url>
            <loc>${URL}/contact</loc>
       </url>
       <url>
            <loc>${URL}/sr</loc>
       </url>
       <url>
            <loc>${URL}/sr/cjenovnik</loc>
       </url>
        <url>
            <loc>${URL}/sr/contact</loc>
       </url>
     </urlset>
   `;
}
export async function getServerSideProps({ res }: any) {
     // Generate the XML sitemap with the blog data
     const sitemap = generateSiteMap();

     res.setHeader("Content-Type", "text/xml");
     // Send the XML to the browser
     res.write(sitemap);
     res.end();

     return {
          props: {},
     };
}

export default function SiteMap() { }
