/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import UserProvider from '../firebase/context'
import Nav from '../components/nav'

const App = ({ Component, pageProps }) => <UserProvider>
  <ThemeProvider theme={theme}>
    <Nav />
    <div sx={{maxWidth: 400, mx: 'auto', minHeight: '400px'}}>
      <Component {...pageProps} />
    </div>
  </ThemeProvider>
</UserProvider>

export default App
