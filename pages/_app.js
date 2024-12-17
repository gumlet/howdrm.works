import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import '../styles.css'

const inter = Inter({ subsets: ["latin"] });


export default function MyApp({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <GoogleAnalytics gaId="G-QLCKRKMERW" />
            <Component {...pageProps} />
        </main>
    )
}