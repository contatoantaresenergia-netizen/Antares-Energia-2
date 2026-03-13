import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
  url: string;
}

export const SEO = ({ title, description, url }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};
