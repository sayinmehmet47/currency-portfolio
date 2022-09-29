import { HelmetProvider } from 'react-helmet-async';

import './App.scss';
import RouterProvider from './providers/router';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <RouterProvider />
      </HelmetProvider>
    </div>
  );
}

export default App;
