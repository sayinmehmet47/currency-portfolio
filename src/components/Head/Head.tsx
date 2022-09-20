import { Helmet } from 'react-helmet-async';
import { HeadProps } from '../../shared/interfaces';

export const Head = ({ title, description }: HeadProps) => {
  return (
    <Helmet
      title={title ? `${title} | Curreny Portfolio` : undefined}
      defaultTitle="Currency Portfolio"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
