import "../styles/globals.css";
import "../styles/home.css";
import { ProvideProduct } from "../components/context";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideProduct>
      <Component {...pageProps} />
    </ProvideProduct>
  );
}

export default MyApp;
