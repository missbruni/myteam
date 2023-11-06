import { Outlet } from 'react-router';

type LayoutProps = {};
const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Layout;
