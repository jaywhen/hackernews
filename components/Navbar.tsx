import NavItem from './NavItem';
import { Nav, NavItemName } from '../types';

const navArr: Nav[] = [
  {
    id: 0,
    link: '/',
    name: NavItemName.Index,
  },
  {
    id: 1,
    link: '/new',
    name: NavItemName.New,
  },
  {
    id: 2,
    link: '/ask',
    name: NavItemName.Ask,
  },
  {
    id: 3,
    link: '/show',
    name: NavItemName.Show,
  },
  {
    id: 4,
    link: '/jobs',
    name: NavItemName.Jobs,
  },
];

const Navbar = () => {
  return (
    <nav className="sticky lg:top-2 top-[calc(100vh-70px)] backdrop-blur-md z-10 lg:mt-6 mt-[-30px] flex justify-evenly items-center font-bold w-96 h-12 shadow-lg text-[#FF6600] rounded-[30px]">
      {navArr.map((item) => (
        <div key={item.id}>
          <NavItem {...item} />
        </div>
      ))}
      <a
        href="https://github.com/jaywhen/hackernews"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1250"
          data-spm-anchor-id="a313x.7781069.0.i1"
          width="28"
          height="28"
        >
          <path
            d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9 19.9-10.8 19.9-22.2v-77.6c-135.8 15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5 31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5 17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5 16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2 118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0 80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7 24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59 188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c0.8 9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4 512.1c0-247.5-200.6-447.9-447.9-447.9C265 64.1 64.6 264.5 64.6 512z"
            fill="#FF6600"
            p-id="1251"
            data-spm-anchor-id="a313x.7781069.0.i0"
          ></path>
        </svg>
      </a>
    </nav>
  );
};

export default Navbar;
