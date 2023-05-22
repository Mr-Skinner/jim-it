import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Head from "next/head";
import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Oswald, Raleway } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald'
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway'
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Jim It!</title>
        <meta name="description" content="Welcome to Jim It!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${oswald.variable} ${raleway.variable} app-container`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
