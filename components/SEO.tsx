import type React from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = '民主富二代補課小站';
const BASE_URL = 'https://booko.g0v.tw';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEO: React.FC<SEOProps> = ({ title, description, path = '/' }) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </>
  );
};

export default SEO;
