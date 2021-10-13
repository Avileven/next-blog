import Layout from '../comps/Layout'
import '../styles/globals.css'
// create the structure of a page ,while the dynamic pages are the component inside the layout
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
   <Component {...pageProps} />

  </Layout>

  )
}

export default MyApp
