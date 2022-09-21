import { HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.scss';
import RouterProvider from './providers/router';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <HelmetProvider>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="my-node" timeout={3000}>
            <RouterProvider />
          </CSSTransition>
        </TransitionGroup>
      </HelmetProvider>
    </div>
  );
}

export default App;
