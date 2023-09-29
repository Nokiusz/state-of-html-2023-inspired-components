/* eslint-disable react-refresh/only-export-components */
interface Route {
  path: string;
  element: JSX.Element;
}

export const ROUTES: Array<Route> = [
  {
    path: '/',
    element: <div>root</div>,
  },
  {
    path: '/1',
    element: <div>1</div>,
  },
  {
    path: '/2',
    element: <div>2</div>,
  },
  {
    path: '/3',
    element: <div>3</div>,
  },
  {
    path: '*', // 404
    element: <div>404</div>,
  },
];
