import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MeshProvider } from "@meshsdk/react";

import {Home} from './components/Home'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default MyApp;
