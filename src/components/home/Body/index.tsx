import Box from '@material-ui/core/Box';
import { useTranslation } from 'next-i18next';
import Typography from 'components/UI/Typography';
import Section from 'components/UI/Section';
import ConstantYield from 'assets/home/ConstantYield';
import DeeperLiquidity from 'assets/home/DeeperLiquidity';
import MinimizeRisk from 'assets/home/MinimizeRisk';
import FullyCollateralized from 'assets/home/FullyCollateralized';
import PriceEfficiency from 'assets/home/PriceEfficiency';
import Synths from 'assets/home/Synths';

interface GridItemProps {
  Icon: any;
  heading: string;
  paragraph: string;
}

const GridItem = ({ Icon, heading, paragraph }: GridItemProps) => {
  return (
    <Box className="flex space-y-4 mb-4 sm:mb-1">
      <Box className="w-20 h-20 justify-center self-center mr-3 -ml-3 sm:mt-4 sm:mr-3">
        <Icon />
      </Box>

      <Box className="flex-row sm:m-3">
        <Typography variant="h4" className="mb-2 ">
          {heading}
        </Typography>
        <Typography variant="p">{paragraph}</Typography>
      </Box>
    </Box>
  );
};

const Body = () => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Box className="flex flex-col rounded-2xl bg-white shadow-2xl items-center py-6 px-5 sm:p-6 dark:bg-cod-gray">
        <Box className="flex-row items-center ">
          <Typography variant="h5" className="text-center mb-6 uppercase">
            {t('body.subHeader')}
          </Typography>
          <Typography variant="h2" className="text-center mb-6 uppercase">
            {t('body.header')}
          </Typography>
          <Typography variant="p" className="mb-6 text-center">
            {t('body.paragraph')}
          </Typography>
        </Box>
        <Box>
          <Box className="grid gap-6 my-8 lg:grid-cols-2 sm:gap-x-16 sm:gap-y-10 sm:my-14 sm:px-5">
            <GridItem
              Icon={PriceEfficiency}
              heading={t('body.grid.0.heading')}
              paragraph={t('body.grid.0.paragraph')}
            />
            <GridItem
              Icon={DeeperLiquidity}
              heading={t('body.grid.1.heading')}
              paragraph={t('body.grid.1.paragraph')}
            />
            <GridItem
              Icon={MinimizeRisk}
              heading={t('body.grid.2.heading')}
              paragraph={t('body.grid.2.paragraph')}
            />
            <GridItem
              Icon={ConstantYield}
              heading={t('body.grid.3.heading')}
              paragraph={t('body.grid.3.paragraph')}
            />
            <GridItem
              Icon={FullyCollateralized}
              heading={t('body.grid.4.heading')}
              paragraph={t('body.grid.4.paragraph')}
            />
            <GridItem
              Icon={Synths}
              heading={t('body.grid.5.heading')}
              paragraph={t('body.grid.5.paragraph')}
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Body;
