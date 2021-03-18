import React from 'react';
import SEO from '../seo/seo';
import WebsiteGlobalProvider from './websiteGlobalProvider';


export default function websitePageHOC(
  Component,
  { seoProps } = { seoProps: { headTitle: 'HOME' } },
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <SEO {...seoProps} />
      <Component {...props} />
    </WebsiteGlobalProvider>
  );
}
