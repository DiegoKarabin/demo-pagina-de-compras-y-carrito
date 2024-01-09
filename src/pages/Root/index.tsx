import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { CleanState } from 'src/components/CleanState';

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
