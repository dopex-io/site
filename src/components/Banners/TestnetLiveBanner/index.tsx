import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useTranslation } from 'next-i18next';
import CtaBanner from 'components/UI/CtaBanner';

const TestnetLiveBanner = () => {
  const { t } = useTranslation('common');

  return (
    <CtaBanner
      title={t('testnetLiveBanner.title')}
      paragraph={t('testnetLiveBanner.paragraph')}
      rightElement={
        <Button
          endIcon={<ArrowForwardIcon />}
          href="https://testnet.dopex.io/faucet"
          variant="outlined"
          className="bg-white text-primary dark:border-transparent hover:bg-gray-200 h-16 mb-3 md:mb-0 md:h-10 border-primary lg:w-40 w-full mt-4 md:mt-0"
          classes={{ label: 'text-lg md:text-sm' }}
        >
          {t('go')}
        </Button>
      }
    />
  );
};

export default TestnetLiveBanner;
