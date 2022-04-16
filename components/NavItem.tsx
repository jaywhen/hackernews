import Link from "next/link";

type Props = {
  link: string,
  name: string,
  tabIndex: number,
  currIndex: number,
};

const clickTheme: string = 'decoration-solid underline underline-offset-4 decoration-2';

const NavItem = ({link, name, tabIndex, currIndex}: Props) =>  {
  return (
    <div className={tabIndex === currIndex ? clickTheme : ''}>
      <Link href={link}>{name}</Link>
    </div>
  )
}

export default NavItem;