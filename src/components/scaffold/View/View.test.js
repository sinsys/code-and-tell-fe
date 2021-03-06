// Tests for About page component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Contexts / Services
import { AppContextProvider } from 'contexts/AppContext/AppContext';

// Component imports
import View from './View';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
      <AppContextProvider>
        <View />
      </AppContextProvider>
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});