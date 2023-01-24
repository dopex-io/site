import { ReactNode } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'next-i18next';
import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';

interface FAQBlockProps {
  question: string;
  answer: string;
}

const FAQBlock = ({ question, answer }: FAQBlockProps) => {
  return (
    <Box className="mb-6 md:mb-8">
      <Accordion className="bg-white dark:bg-cod-gray py-3 shadow-lg rounded-xl">
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon className="fill-current text-stieglitz" />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className="text-black dark:text-white text-2xl font-normal">
            {question}
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const FAQ = () => {
  const { t } = useTranslation('sale');

  const faqData = [0, 1, 2].map((index) => {
    return {
      question: t(`faq.data.${index}.question`),
      answer: t(`faq.data.${index}.answer`),
    };
  });

  return (
    <Section>
      <Box className="mb-9 text-center sm:text-left">
        <Typography variant="h5" className="mb-4">
          {t('faq.header')}
        </Typography>
        <Typography variant="h2" className="mb-2">
          {t('faq.subHeader')}
        </Typography>
        <Typography variant="p">{t('faq.paragraph')}</Typography>
      </Box>
      <Box>
        {faqData.map((data) => {
          return <FAQBlock key={data.question} {...data} />;
        })}
      </Box>
    </Section>
  );
};

export default FAQ;
