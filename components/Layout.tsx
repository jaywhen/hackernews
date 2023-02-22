import { ReactElement } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactElement[] }) => {
  return (
    <div className="flex flex-col items-center font-Mono">
      <Navbar />
      <main className="lg:mt-8">{children}</main>
    </div>
  );
};

export default Layout;
