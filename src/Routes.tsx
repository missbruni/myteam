import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import AboutPage from './pages/About';
import Layout from './pages/components/Layout';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
);

export function AppRoutes() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export function Fallback() {
  return <p>loading...</p>;
}

export default AppRoutes;
