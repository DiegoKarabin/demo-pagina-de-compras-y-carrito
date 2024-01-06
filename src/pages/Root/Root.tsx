import { Outlet } from 'react-router-dom';

export const Root = () => (
  <>
    <header>
      <div className="container-fluid promo-banner">
        <div className="container">
          <p>
            Hot sale -30% en sandalias
          </p>
        </div>
      </div>
    </header>
    <Outlet />
  </>
)
