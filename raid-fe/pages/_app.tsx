import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SessionContextProvider from "../context/SessionContext";
import { persistor, store } from "../state";
import "../styles/globals.css";
import theme from "../theme";
import ISession from "../types/ISession";
import { getSession } from "../utils/session";

function MyApp({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<ISession>({ status: "loading" });

  useEffect(() => {
    getSession()
      .then((session) => {
        setSession(session);
      })
      .catch(console.error);
  }, []);

  return (
    <SessionContextProvider session={session}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </SessionContextProvider>
  );
}
export default MyApp;
