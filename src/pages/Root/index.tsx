import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CleanState } from '../../components/CleanState';

export const Root = () => (
  <>
    <CleanState>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </CleanState>
  </>
)
