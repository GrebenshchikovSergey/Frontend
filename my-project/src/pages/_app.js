import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
import { useEffect } from "react";
import AuthContextProvider from "@/context/AuthContextProvider";
export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <AuthContextProvider><Component {...pageProps} /></AuthContextProvider>
}
