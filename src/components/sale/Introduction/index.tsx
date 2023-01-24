import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'next-i18next';
import Launch from 'assets/sale/Launch';
import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';

const Introduction = () => {
  const { t } = useTranslation('sale');
  const { t: tc } = useTranslation('common');

  return (
    <Section className="flex flex-col relative lg:flex-row items-center mb-6 md:mb-0 pt-12 sm:pt-8 sm:pb-12 mt-32">
      <Box className="flex flex-col z-10 lg:w-2/3">
        <Typography
          variant="h2"
          component="h1"
          className="text-center mb-6 lg:text-left uppercase"
        >
          {t('introduction.title')}
        </Typography>
        <Typography
          variant="p"
          className="text-center mb-16 md:mb-8 lg:text-left"
        >
          {t('introduction.paragraph')}
        </Typography>
        <Box className="flex flex-col w-full sm:flex-row sm:items-center">
          <Button
            className="w-full h-14 mb-6 sm:h-10 sm:w-36 sm:mr-8 sm:mb-0"
            variant="contained"
            color="primary"
            href="https://app.dopex.io/sale"
          >
            {tc('go')}
          </Button>
        </Box>
      </Box>
      <Box className="absolute -top-16 z-0 sm:-top-8 lg:w-1/3 lg:static lg:object-contain">
        <Launch className="transform lg:-translate-x-24 xl:-translate-x-8" />
      </Box>
    </Section>
  );
};

export default Introduction;
