import Link from 'next/link';
import { useRouter } from 'next/router';
import { CLICKEDTHEME, Nav, NavItemName, NAVS } from '../types';

const NavItem = (nav: Nav) => {
  const router = useRouter();
  const handleClick = () => {
    const currNav = router.pathname.split('/')[1] || 'index';

    // memo current scroll pos
    if (NAVS.includes(currNav)) {
      sessionStorage.setItem(`${currNav}_POS_Y`, String(window.scrollY));
    }
  };

  return (
    <div
      className={router.pathname === nav.link ? CLICKEDTHEME : ''}
      onClick={handleClick}
    >
      <Link href={nav.link}>{String(nav.name)}</Link>
    </div>
  );
};

export default NavItem;
