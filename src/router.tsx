import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Product } from './pages/Product';
import { ErrorPage } from './pages/Error';
import { Root } from './pages/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Navigate to="/products/0" />
      },
      {
        path: 'products/:products',
        element: <Product />,
      },
    ]
  },
]);
