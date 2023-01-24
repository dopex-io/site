import cx from 'classnames';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'next-i18next';
import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';

const INVESTORS_DATA = [
  {
    name: 'TΞtranodΞ',
    alt: 'Tetranode',
    src: '/png/tetranode.png',
    imgClasses: 'rounded-full h-16 lg:h-24',
  },
  {
    name: 'DefiGod',
    alt: 'DefiGod',
    src: '/png/defi_god.png',
    imgClasses: 'rounded-full h-16 lg:h-24',
  },
  {
    alt: 'OrcaTraders',
    src: '/png/orca_traders.png',
    imgClasses: 'filter h-24 dark:invert dark:brightness-0',
  },
  {
    alt: 'Pattern',
    src: '/png/pattern.png',
    imgClasses: 'filter h-36 dark:invert dark:brightness-0',
  },
  {
    alt: 'Debase',
    src: '/svg/debase.svg',
    imgClasses: 'h-14 lg:h-24 dark:invert dark:brightness-0 filter',
  },
  {
    alt: 'Hardwood Orcz',
    src: '/svg/hardwood_orcz.svg',
    imgClasses: 'h-14 lg:h-20 dark:invert dark:brightness-0 filter',
  },
  {
    alt: 'DCV',
    src: '/png/dcv.png',
    imgClasses: 'h-18 lg:h-24 invert filter dark:filter-none',
  },
];

interface GridItemProps {
  src: string;
  alt: string;
  name?: string;
  imgClasses?: string;
  className?: string;
}

const GridItem = ({ src, alt, name, imgClasses, className }: GridItemProps) => {
  return (
    <Box
      className={cx(
        className,
        'flex flex-row items-center justify-center lg:justify-start w-64 lg:w-80'
      )}
    >
      <img src={src} alt={alt} className={cx(imgClasses, 'object-contain')} />
      {name ? (
        <h3 className="ml-8 text-3xl text-black dark:text-white">{name}</h3>
      ) : null}
    </Box>
  );
};

const Investors = () => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Typography variant="h5" className="text-center">
        {t('investorsAndPartners')}
      </Typography>
      <Box className="mt-24 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-20 gap-x-10">
        {INVESTORS_DATA.map((data) => {
          return <GridItem key={data.alt} {...data} />;
        })}
      </Box>
    </Section>
  );
};

export default Investors;
