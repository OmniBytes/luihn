import Nav from 'components/Nav'
//import {appWithTranslation} from 'i18n'
import 'styles/evie.css' // fallback, dont think its needed
import 'styles/index.css'
import useEvie from 'utils/useEvie'

function CustomApp({Component, pageProps}) {
  useEvie()

  return (
    <>
      <Nav />

      <Component {...pageProps} />
    </>
  )
}

//export default appWithTranslation(CustomApp)
export default CustomApp
