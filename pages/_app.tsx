import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
import RootLayout from "../src/app/layout";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const lang = localStorage.getItem('lang') || 'ko';
      if (url.startsWith('/' + lang)) return;
      router.push('/' + lang + url);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
