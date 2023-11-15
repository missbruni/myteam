import { Outlet } from 'react-router';

import AppBar from './AppBar';
import Footer from './Footer';

type LayoutProps = {};
const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="h-screen">
      <AppBar />
      <div className="flex flex-col container h-screen mx-auto grow">
        <div className="grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
