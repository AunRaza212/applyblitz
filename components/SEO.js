// components/SEO.js
import Head from 'next/head';

const SEO = ({ title, description, keywords, robots }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots || "index, follow"} />
      {/* Add more tags for open graph and social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* Add other SEO meta tags as needed */}
    </Head>
  );
};

export default SEO;
