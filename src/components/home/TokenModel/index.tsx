import cx from 'classnames';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'next-i18next';
import TextLink from 'components/UI/TextLink';
import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';
import Dpx from 'assets/coins/Dpx';
import Rdpx from 'assets/coins/Rdpx';

import styles from './styles.module.scss';

const TokenModel = () => {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');

  return (
    <Section>
      <Box className="flex flex-col m-auto xl:flex-row ">
        <Box className="flex flex-col p-5 items-center xl:w-1/2 xl:p-0 xl:items-start xl:pt-11">
          <Typography
            variant="h5"
            className="mb-5 text-center xl:text-left uppercase"
          >
            {t('tokenModel.subHeader')}
          </Typography>
          <Typography
            variant="h2"
            className="mb-5 text-center xl:text-left uppercase"
          >
            {t('tokenModel.header')}
          </Typography>
          <Typography variant="p" className="mb-5 text-center xl:text-left">
            {t('tokenModel.paragraph')}
          </Typography>
          <TextLink href="https://docs.dopex.io/tokenomics">
            {tc('tokenomics')} ⟶
          </TextLink>
        </Box>
        <Box className="flex flex-col sm:flex-row xl:w-1/2">
          <Box className="flex flex-col rounded-2xl bg-white p-6 my-3 shadow-xl sm:mr-3 sm:w-1/2 dark:bg-cod-gray">
            <Dpx className="mt-1" />
            <Typography
              variant="h3"
              component="div"
              className={cx(styles.coinTitle, 'pt-2 mb-4 xl:pt-3')}
            >
              DPX
            </Typography>
            <Typography variant="p" className="mb-3">
              {t('tokenModel.dpx.description')}
            </Typography>
            <Typography variant="p" className=" mb-2">
              {t('tokenModel.dpx.paragraph')}
            </Typography>
          </Box>
          <Box className="flex flex-col rounded-2xl bg-white p-6 my-3 shadow-xl sm:ml-3 sm:w-1/2 dark:bg-cod-gray">
            <Rdpx />
            <Typography
              variant="h3"
              component="div"
              className={cx(styles.coinTitle, 'pt-2 mb-4 xl:pt-3')}
            >
              rDPX
            </Typography>
            <Typography variant="p" className="mb-3">
              {t('tokenModel.rdpx.description')}
            </Typography>
            <Typography variant="p" className="mb-2 ">
              {t('tokenModel.rdpx.paragraph')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default TokenModel;
