
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import ReservationPage from '../pages/reservation/page';
import GalleryPage from '../pages/gallery/page';
import MenuPage from '../pages/menu/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/reservation',
    element: <ReservationPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
