import React from 'react';
import {Outlet} from 'react-router-dom';
// import Globalstyle from './Styles/Globalstyle';

function App(): JSX.Element {
  return (
      <div>
        <Outlet />
      </div>
  );
}

export default App;