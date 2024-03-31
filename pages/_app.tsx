import type { AppProps } from "next/app";
import "sanitize.css";
import { Fira_Sans } from "next/font/google";
import { Global } from "@emotion/react";
import { global } from "../styles/global";
import styled from "@emotion/styled";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "600"],
});

const Wrapper = styled.div`
  height: 100%;
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Wrapper className={firaSans.className}>
    <Head>
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <DefaultSeo
      openGraph={{
        type: "website",
        locale: "en",
        url: "",
        siteName: "mdx blog sample",
        images: [
          {
            url: "/ogs/preview.jpg",
            width: 800,
            height: 600,
            alt: "mdx blog sample",
            type: "image/jpeg",
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/favicons/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/favicons/safari-pinned-tab.svg",
          color: "#999999",
        },
      ]}
    />
    <Global styles={global} />
    <Component {...pageProps} />
  </Wrapper>
);

export default MyApp;
