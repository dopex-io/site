import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useTranslation } from 'next-i18next';
import CtaBanner from 'components/UI/CtaBanner';

const PurchaseBanner = () => {
  const { t } = useTranslation('common');

  return (
    <CtaBanner
      title={t('purchaseBanner.title')}
      paragraph={t('purchaseBanner.paragraph')}
      rightElement={
        <Button
          endIcon={<ArrowForwardIcon />}
          href="https://www.notion.so/dopex/Dopex-Academy-a6e2a5c7a8e84980b93c5ba04d44c2d5#88221a7e67244ddba378dc5bd6fc2d5f"
          variant="outlined"
          className="bg-white text-primary dark:border-transparent hover:bg-gray-200 h-16 mb-3 md:mb-0 md:h-10 border-primary lg:w-40 w-full mt-4 md:mt-0"
          classes={{ label: 'text-lg md:text-sm' }}
        >
          {t('learnMore')}
        </Button>
      }
    />
  );
};

export default PurchaseBanner;
