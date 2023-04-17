import { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'next-i18next';

import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';
import FrontendsTable from '../FrontendsTable';

// import styles from './styles.module.scss';

const GradientText = ({ children }: { children: ReactNode }) => {
  return <span>{children}</span>;
};

const Introduction = () => {
  return (
    <Section className="mt-32 mb-20 md:mb-0 pt-3 sm:pt-3 md:pt-3 lg:pt-3 xl:pt-3">
      <Box className="flex flex-col items-center pt-5 px-5 md:items-center mb-24">
        <Typography variant="h1" className="mb-6 md:m-1 md:text-center">
          Dopex Frontends
        </Typography>
        <Typography variant="p" className="mb-8 md:m-1">
          Users can choose a frontend from the different verified frontend
          operators for Dopex below.
        </Typography>
      </Box>
      <Box className="flex mb-8 justify-between items-end">
        <Box className="text-3xl font-bold">Frontends List</Box>
        <a href="" className="text-lg underline">
          Submit a Frontend
        </a>
      </Box>
      <FrontendsTable />
    </Section>
  );
};

export default Introduction;
