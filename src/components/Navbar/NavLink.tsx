import { FC, ReactNode } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Box from '@material-ui/core/Box';

const NavLink: FC<{
  name?: string;
  to: string;
  active?: boolean;
  children?: ReactNode;
}> = ({ name, to, active, children }) => {
  const linkClassName = cx(
    'font-light text-lg hover:no-underline hover:text-primary dark:hover:no-underline dark:hover:text-white capitalize',
    active
      ? 'text-primary dark:text-white'
      : 'text-stieglitz dark:text-wave-blue'
  );
  if (to.startsWith('http')) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={children ? '' : linkClassName}
      >
        {children ? children : name}
      </a>
    );
  } else {
    return (
      <Link href={to}>
        <Box className={children ? '' : linkClassName}>
          {children ? children : name}
        </Box>
      </Link>
    );
  }
};

export default NavLink;
