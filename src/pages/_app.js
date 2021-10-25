import { DataContextProvider } from "../context/dataContext";
import "tailwindcss/tailwind.css"
import "../../node_modules/nprogress/nprogress.css"

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}

export default MyApp;
