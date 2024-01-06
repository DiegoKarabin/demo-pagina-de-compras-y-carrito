import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import { ErrorPage } from './pages/Error';
import { Root } from './pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'categories/:category',
        element: <Category />,
      },
      {
        path: 'products/:products',
        element: <Product />,
      },
    ]
  },
]);
