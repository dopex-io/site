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
  return (
    <div className="p-4 border border-stieglitz border-opacity-50 rounded-2xl bg-cod-gray">
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Managed By</TableHeaderCell>
            <TableHeaderCell>Powered Via</TableHeaderCell>
            <TableHeaderCell>Link</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          <tr>
            <TableDataCell>Dopex UI</TableDataCell>
            <TableDataCell>BossLmp (Community Member)</TableDataCell>
            <TableDataCell>IPFS</TableDataCell>
            <TableDataCell>
              <a
                href="https://dopex-ui.eth.limo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wave-blue"
              >
                Visit
              </a>
            </TableDataCell>
          </tr>
          <tr>
            <TableDataCell>Dopex App</TableDataCell>
            <TableDataCell>Dopex Team</TableDataCell>
            <TableDataCell>Vercel</TableDataCell>
            <TableDataCell>
              <a
                href="https://app.dopex.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wave-blue"
              >
                Visit
              </a>
            </TableDataCell>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
