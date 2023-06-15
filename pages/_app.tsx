import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import Header from '../components/Header'

const theme: DefaultTheme = {
  colors: {
   black: '#111',
   white: '#FDFFFC',
   background:'#EAEDED',
   orange:'orange',
   navBg:'#131921'
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
