import '@/src/styles/globals.css'
import '@fontsource/inter'
import '@fontsource/open-sans'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
