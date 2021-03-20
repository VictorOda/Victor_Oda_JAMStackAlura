/* eslint-disable react/require-default-props */
import React from 'react';
import Head from 'next/head';

interface Props {
  headTitle?: string
}

export default function SEO({ headTitle }: Props) {
  const pageTitleDefault = '<oda />';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Software Engineer - Portfolio" />
      <meta property="og:image" content="/images/screenshot.jpg" />
      <meta property="og:url" content="https://victoroda.com/" />

      <meta property="twitter:card" content="/images/screenshot.jpg" />
      <meta property="twitter:url" content="https://victoroda.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content="Software Engineer - Portfolio" />
      <meta property="twitter:image" content="/images/screenshot.jpg" />
    </Head>
  );
}
