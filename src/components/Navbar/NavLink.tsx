import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Box from '@material-ui/core/Box';

const NavLink: FC<{
  name?: string;
  to: string;
  children?: ReactNode;
}> = ({ name, to, children }) => {
  const linkClassName =
    'font-light text-lg hover:no-underline hover:text-primary dark:hover:no-underline dark:hover:text-white capitalize text-stieglitz dark:text-wave-blue';

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
