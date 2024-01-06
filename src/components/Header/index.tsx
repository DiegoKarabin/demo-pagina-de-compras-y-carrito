import { ContactBanner } from "../ContactBanner";
import { Navigation } from "../Navigation";
import { PromoBanner } from "../PromoBanner";

export const Header = () => (
  <>
    <header>
      <PromoBanner />
      <ContactBanner />
      <Navigation />
    </header>
  </>
)
