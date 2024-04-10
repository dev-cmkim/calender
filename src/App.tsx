import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './components/routes';
// import Globalstyle from './Styles/Globalstyle';

function App(): JSX.Element {
  return (
    <>
      {/* <Globalstyle /> */}
      <Router>
        <RoutesComponent />
      </Router>
    </>
  );
}

export default App;