import '../styles/globals.css'
import Layout from './components/Layout/Layout'
import { IntlProvider } from "react-intl";
import en from "../pages/i18n/en.json";
import vi from "../pages/i18n/vi.json";
import { useRouter } from "next/router";
const messages = {
  en,
  vi,
};
function getDirection(locale) {
  return "ltr";
}
export default function App({ Component, pageProps }) {

  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
    <Layout>
    <Component {...pageProps}/>
  </Layout>
  </IntlProvider>
  )
}
