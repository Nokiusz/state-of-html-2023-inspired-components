import { Home, DataList } from './pages';

/* eslint-disable react-refresh/only-export-components */
interface Route {
  path: string;
  name?: string;
  element: JSX.Element;
}

export const ROUTES: Array<Route> = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'datalist',
    path: '/datalist',
    element: <DataList />,
  },
  {
    name: '2',
    path: '/2',
    element: <div>2</div>,
  },
  {
    name: '3',
    path: '/3',
    element: <div>3</div>,
  },
  {
    path: '*', // 404
    element: <div>404</div>,
  },
];
