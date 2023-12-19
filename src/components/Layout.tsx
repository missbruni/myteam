import { Outlet } from 'react-router';

import AppBar from './AppBar';
import Footer from './Footer';

type LayoutProps = {};
const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="h-screen flex flex-col">
      <AppBar />
      <div className="w-full flex flex-1 mx-auto border-4 border-yellow-400">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
