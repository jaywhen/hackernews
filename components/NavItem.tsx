import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  link: string,
  name: string,
};


const NavItem = ({link, name}: Props) =>  {
  const router = useRouter();
  const clickTheme: string = 'decoration-solid underline underline-offset-4 decoration-2';
  return (
    <div className={router.pathname === link ? clickTheme : ''}>
      <Link href={link}>{name}</Link>
    </div>
  )
}

export default NavItem;