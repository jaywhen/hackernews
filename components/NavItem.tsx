import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "../types";

const NavItem = (nav: Nav) => {
  const router = useRouter();
  const clickTheme: string = 'decoration-solid underline underline-offset-4 decoration-2';
  return (
    <div className={router.pathname === nav.link ? clickTheme : ''}>
      <Link href={nav.link}>{nav.name}</Link>
    </div>
  )
}

export default NavItem;