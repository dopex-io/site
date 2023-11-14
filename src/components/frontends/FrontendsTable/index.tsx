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
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getFrontends() {
      const data = await fetch(
        'https://raw.githubusercontent.com/dopex-io/frontend-registry/main/list.json',
      ).then((res) => res.json());

      setData(data);
    }

    getFrontends();
  }, []);

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
