import { Outlet } from 'react-router';

import AppBar from './AppBar';
import Footer from './Footer';

type LayoutProps = {};
const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="h-screen">
      <AppBar />
      <div className="flex h-full flex-col">
        <div className="grow container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
