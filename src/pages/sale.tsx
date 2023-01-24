import Head from 'next/head';
import Box from '@material-ui/core/Box';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Introduction from 'components/sale/Introduction';
import Body from 'components/sale/Body';
import FAQ from 'components/sale/FAQ';

export default function Sale() {
  const { t } = useTranslation('sale');

  return (
    <>
      <Head>
        <meta name="description" content={t('siteDescription')} />
        <title>{t('siteTitle')}</title>
      </Head>
      <Box className="overflow-x-hidden bg-white-dark dark:bg-black text-white">
        <Navbar />
        <Introduction />
        <Body />
        <FAQ />
        <Footer />
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'sale'])),
    },
  };
}
