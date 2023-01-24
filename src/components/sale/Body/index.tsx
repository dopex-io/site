import Box from '@material-ui/core/Box';

import { DPXPriceData, DPXEmissionData } from './data';
import GridItem from './GridItem';
import SaleDistributionItem from './SaleDistributionItem';
import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';
import One from 'assets/sale/One';
import Two from 'assets/sale/Two';
import Three from 'assets/sale/Three';
import Four from 'assets/sale/Four';
import Five from 'assets/sale/Five';
import DPXAllocationLg from 'assets/sale/DPXAllocationLg';
import DPXAllocationSm from 'assets/sale/DPXAllocationSm';
import { useTranslation } from 'next-i18next';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const Body = () => {
  const { t } = useTranslation('sale');

  return (
    <Section className="pt-4">
      <Box
        id="body"
        className="text-center bg-white dark:bg-cod-gray shadow-lg rounded-lg py-12 px-4 md:px-8"
      >
        <Box className="text-center mb-12">
          <Typography variant="h2" className="mb-2 uppercase">
            {t('body.header')}
          </Typography>
          <Typography variant="p">{t('body.description')}</Typography>
        </Box>
        <Box className="flex flex-col md:flex-row">
          <GridItem
            Icon={One}
            heading={t('body.grid.0.heading')}
            paragraph={t('body.grid.0.paragraph')}
            className="md:w-1/3 md:mr-3"
          ></GridItem>
          <GridItem
            Icon={Two}
            heading={t('body.grid.1.heading')}
            paragraph={t('body.grid.1.paragraph')}
            linkTitle={t('body.grid.1.linkTitle') + '⟶'}
            link="https://etherscan.io/address/0x468aC403f2C0aE0C65dB7dc22eD3440aC6ab0c39"
            className="md:w-1/3 md:mr-3"
          ></GridItem>
          <GridItem
            Icon={Three}
            heading={t('body.grid.2.heading')}
            paragraph={t('body.grid.2.paragraph')}
            className="md:w-1/3"
          ></GridItem>
        </Box>
        <hr className="dark:border-black mb-12" />
        <Box className="mb-12">
          <Box className="mb-6 flex flex-row">
            <Box className="mr-4 h-7 w-8">
              <Four />
            </Box>
            <Typography variant="h4">{t('body.grid.3.heading')}</Typography>
          </Box>
          <Box className="text-left grid grid-cols-2 gap-6 md:grid-cols-4">
            <SaleDistributionItem
              heading={t('body.grid.3.totalSupply')}
              value="500,000 DPX"
            />
            <SaleDistributionItem
              heading={t('body.grid.3.saleSupply')}
              value="75,000 DPX"
            />
            <SaleDistributionItem
              heading={t('body.grid.3.maxPrice')}
              value="$500 / DPX"
            />
          </Box>
          <Box className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart className="mt-10" data={DPXPriceData}>
                <defs>
                  <linearGradient
                    id="color"
                    x1="1.1"
                    y1="0.3"
                    x2="1.1"
                    y2="1.1"
                  >
                    <stop offset="0%" stopColor="#002EFF" stopOpacity={1} />
                    <stop offset="80%" stopColor="#002EFF" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} opacity={0.2} />
                <YAxis
                  orientation={'right'}
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  domain={[0, 500]}
                  tickCount={6}
                  tickMargin={10}
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#002EFF"
                  fill="url(#color)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
          <Box className="flex flex-col">
            <span className="mb-8 font-mono font-bold text-center text-sm text-stieglitz dark:text-wave-blue">
              {t('body.grid.3.ethInUsd')}
            </span>
            <span className="font-mono font-light text-center text-sm text-stieglitz dark:text-wave-blue">
              {t('body.grid.3.helperText')}
            </span>
          </Box>
        </Box>
        <hr className="dark:border-black mb-12" />{' '}
        <Box className="mb-12">
          <Box className="mb-9 flex flex-row">
            <Box className="mr-4 h-7 w-8">
              <Five />
            </Box>
            <Typography variant="h4"> {t('body.grid.4.heading')}</Typography>
          </Box>
          <Box className="h-52 w-full my-20">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DPXEmissionData} className="mt-10">
                <CartesianGrid vertical={false} opacity={0.2} />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  domain={[2021, 2026]}
                  tickCount={6}
                  tickSize={6}
                  tickMargin={10}
                />
                <YAxis
                  orientation={'right'}
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  domain={[0, 100]}
                  tickCount={5}
                  tickMargin={10}
                />
                <Area
                  type="monotone"
                  dataKey="development"
                  stroke="#22E1FF"
                  stackId="1"
                  fill="#22E1FF"
                />
                <Area
                  type="monotone"
                  dataKey="platformRewards"
                  stroke="#002EFF"
                  stackId="1"
                  fill="#002EFF"
                />
                <Area
                  type="monotone"
                  dataKey="tokenSale"
                  stroke="#8AACF4"
                  stackId="1"
                  fill="#8AACF4"
                />
                <Area
                  type="monotone"
                  dataKey="farming"
                  stroke="#FF9900"
                  stackId="1"
                  fill="#FF9900"
                />
                <Area
                  type="monotone"
                  dataKey="team"
                  stroke="#F80196"
                  stackId="1"
                  fill="#F80196"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
          <Box className="w-full mb-14">
            <DPXAllocationSm className="xl:hidden max-w-full" />
            <DPXAllocationLg className="hidden xl:block max-w-full" />
          </Box>
          <span className="font-mono font-light text-center text-sm text-stieglitz dark:text-wave-blue">
            {t('body.grid.4.helperText')}
          </span>
        </Box>
      </Box>
    </Section>
  );
};

export default Body;
