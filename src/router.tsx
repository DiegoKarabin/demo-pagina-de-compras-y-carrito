import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Product } from 'src/pages/Product';
import { ErrorPage } from 'src/pages/Error';
import { Root } from 'src/pages/Root';
import { Cart } from 'src/pages/Cart';

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
        path: 'products/:productIndex',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);
