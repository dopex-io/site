import { useEffect, useState } from 'react';

const TableContainer = ({ children }) => {
  return <div className="overflow-auto">{children}</div>;
};

const TableHeader = ({ children }) => {
  return (
    <thead className="text-mono text-lg text-stieglitz uppercase">
      {children}
    </thead>
  );
};

const Table = ({ children }) => {
  return <table className="w-full text-left">{children}</table>;
};

const TableHeaderCell = ({ children }) => {
  return (
    <th scope="col" className="px-6 py-3">
      {children}
    </th>
  );
};

const TableDataCell = ({ children }) => {
  return <td className="px-6 py-4">{children}</td>;
};

export default function FrontendsTable() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getFrontends() {
  //     const data = await fetch(
  //       'https://cdn.jsdelivr.net/gh/dopex-io/frontend-registry@main/list.json'
  //     ).then((res) => res.json());

  //     setData(data);
  //   }

  //   getFrontends();
  // }, []);

  return (
    <div className="p-4 border border-stieglitz border-opacity-50 rounded-2xl bg-cod-gray">
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>By</TableHeaderCell>
              <TableHeaderCell>Hosted On</TableHeaderCell>
              <TableHeaderCell>Link</TableHeaderCell>
            </tr>
          </TableHeader>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.name}>
                  <TableDataCell>{item.name}</TableDataCell>
                  <TableDataCell>{item.owner}</TableDataCell>
                  <TableDataCell>{item.hostedOn}</TableDataCell>
                  <TableDataCell>
                    <a
                      href={item.websiteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wave-blue"
                    >
                      Visit
                    </a>
                  </TableDataCell>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

const data = [
  {
    name: 'Dopex App',
    websiteURL: 'https://app.dopex.io',
    dateLaunched: 'June 2021',
    description:
      'Official Dopex frontend, code at https://github.com/dopex-io/elvarg',
    owner: 'Dopex',
    hostedOn: 'Vercel',
    contactInfo: [
      { type: 'discord', url: 'https://discord.gg/dopex' },
      { type: 'twitter', url: 'https://twitter.com/dopex-io' },
      { type: 'github', url: 'https://github.com/dopex-io' },
    ],
  },
  {
    name: 'Dopex UI',
    websiteURL: 'https://dopex-ui.eth.limo',
    dateLaunched: '12th May 2023',
    description:
      'Forked from https://github.com/dopex-io/elvarg running on IPFS',
    owner: 'BossLmp',
    hostedOn: 'IPFS',
    contactInfo: [{ type: 'twitter', url: 'https://twitter.com/BossImp75' }],
  },
];
