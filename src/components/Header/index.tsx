import { ContactBanner } from 'src/components/ContactBanner';
import { Navigation } from 'src/components/Navigation';
import { PromoBanner } from 'src/components/PromoBanner';

export const Header = () => (
  <>
    <header>
      <PromoBanner />
      <ContactBanner />
      <Navigation />
    </header>
  </>
);
