import 'bootstrap/scss/bootstrap.scss' /// Next permet d'incorporer les codes SCSS sans besoin de transiplateur
import { SSRProvider } from 'react-bootstrap'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}