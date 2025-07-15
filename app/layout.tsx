import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<>      <img src="/round-logo-bg.svg" alt="Howdrm Logo" style={{ height: '1.5em' }} />
      <span style={{ marginLeft: '.4em', fontWeight: 500 }}>
         Howdrm.works
       </span>
     </>}
    logoLink="https://howdrm.works"
    projectLink='https://github.com/gumlet/howdrm.works'
    // ... Your additional navbar options
  />
)
const footer = <Footer>{new Date().getFullYear()} © Gumlet</Footer>

const search = <Search
     placeholder="Search Howdrm.works"
   />
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          dark: "#000000"
        }}
        color={{
          hue: {
            dark: 258,
            light: 243,
          },
          saturation: {
            dark: 90,
            light: 75,
          },
          lightness: {
            dark: 66,
            light: 59
          }
        }}
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <GoogleAnalytics gaId="G-QLCKRKMERW" />
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          search={search}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}