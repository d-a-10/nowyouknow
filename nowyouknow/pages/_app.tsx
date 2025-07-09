import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans_Arabic } from 'next/font/google'

const noto = Noto_Sans_Arabic({ subsets: ['arabic'] })

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>

}

export default MyApp
