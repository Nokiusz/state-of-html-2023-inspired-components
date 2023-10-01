import {
  Home,
  DataList,
  ShowPicker,
  SelectList,
  ContentEditable,
} from './pages';

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
    name: 'showpicker',
    path: '/showpicker',
    element: <ShowPicker />,
  },
  {
    name: 'selectlist',
    path: '/selectlist',
    element: <SelectList />,
  },
  {
    name: 'contentEditable',
    path: '/content-editable',
    element: <ContentEditable />,
  },
  {
    path: '*', // 404
    element: <div>404</div>,
  },
];
