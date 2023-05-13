import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';
import FrontendsTable from '../FrontendsTable';

const Introduction = () => {
  return (
    <Section className="mt-32 mb-20 md:mb-0 pt-3 sm:pt-3 md:pt-3 lg:pt-3 xl:pt-3">
      <div className="flex flex-col items-center pt-5 px-5 md:items-center mb-24">
        <Typography variant="h1" className="mb-6 md:m-1 md:text-center">
          Dopex Frontends
        </Typography>
        <Typography variant="p" className="mb-8 md:m-1">
          Users can choose a frontend from the different frontend operators for
          Dopex below.
        </Typography>
        <Typography variant="p" className="text-sm mb-8 md:m-1 italic">
          <b>Disclaimer:</b> Dopex has not entered into any form of cooperation
          with Frontend Operators. The list of Frontend Operators is provided
          for informational purposes only. Neither is the list conclusive, nor
          has Dopex conducted any due diligence on these operators. Accordingly,
          Dopex does not make any statement regarding technical functionality
          and/or the trustworthiness of the Frontend Operators listed.
        </Typography>
      </div>
      <div className="flex mb-8 justify-between items-end">
        <div className="text-3xl font-bold">Frontends List</div>
        <a
          href="https://github.com/dopex-io/frontend-registry"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg underline"
        >
          Submit a Frontend
        </a>
      </div>
      <FrontendsTable />
    </Section>
  );
};

export default Introduction;
