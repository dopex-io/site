import Box from '@material-ui/core/Box';
import cx from 'classnames';
import { useTranslation } from 'next-i18next';
import TextLink from 'components/UI/TextLink';
import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';
import ProtocolIncome from 'assets/sale/ProtocolIncome';
import DualTokenModel from 'assets/sale/DualTokenModel';
import IterativeTokenModel from 'assets/sale/IterativeTokenModel';
import GovernanceToken from 'assets/sale/GovernanceToken';

interface GridItemProps {
  Icon: any;
  heading: string;
  paragraph: string;
  className?: string;
}

const GridItem = ({ Icon, heading, paragraph, className }: GridItemProps) => {
  return (
    <Box
      className={cx(
        'bg-white dark:bg-cod-gray rounded-xl shadow-lg pt-10 px-4 pb-4 md:w-64 w-full h-60',
        className
      )}
    >
      <Box className="mb-3 h-14">
        <Icon />
      </Box>
      <Typography variant="h4" className="mb-2">
        {heading}
      </Typography>
      <Typography variant="p">{paragraph}</Typography>
    </Box>
  );
};

const Features = () => {
  const { t } = useTranslation('sale');
  const { t: tc } = useTranslation('common');

  return (
    <Section className="flex flex-col xl:flex-row">
      <Box className="mb-8 xl:w-1/2 xl:mt-28">
        <Typography variant="h5" className="mb-4 uppercase">
          {t('features.header')}
        </Typography>
        <Typography variant="h2" className="mb-2 uppercase">
          {t('features.subHeader')}
        </Typography>
        <Typography variant="p" className="mb-6">
          {t('features.paragraph')}
        </Typography>
        <TextLink
          href="https://docs.dopex.io/tokenomics"
          target="_blank"
          rel="noopener noreferrer"
        >
          {tc('tokenomics')} ⟶
        </TextLink>
      </Box>
      <Box className="flex flex-col xl:w-1/2">
        <Box className="flex flex-col items-center sm:items-start sm:flex-row md:justify-center">
          <Box className="flex flex-col sm:mr-5">
            <GridItem
              Icon={GovernanceToken}
              heading={t('features.grid.0.heading')}
              paragraph={t('features.grid.0.paragraph')}
              className="mb-6"
            />
            <GridItem
              Icon={DualTokenModel}
              heading={t('features.grid.1.heading')}
              paragraph={t('features.grid.1.paragraph')}
              className="mb-6 sm:mb-0"
            />
          </Box>
          <Box className="flex flex-col sm:mt-10">
            <GridItem
              Icon={ProtocolIncome}
              heading={t('features.grid.2.heading')}
              paragraph={t('features.grid.2.paragraph')}
              className="mb-6"
            />

            <GridItem
              Icon={IterativeTokenModel}
              heading={t('features.grid.3.heading')}
              paragraph={t('features.grid.3.paragraph')}
              className="mb-6 sm:mb-0"
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Features;
