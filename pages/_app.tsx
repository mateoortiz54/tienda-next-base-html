import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider, CssBaseline} from '@mui/material'
import { lightTheme } from '@/themes'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* Nada va a funcionar proveniente del tema si no le ponemos le CssBaseline */}
      <CssBaseline/>
      <Component {...pageProps} />

    </ThemeProvider>
  )
}
