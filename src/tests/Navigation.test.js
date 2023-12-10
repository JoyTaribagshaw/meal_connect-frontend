import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import du Provider de react-redux
import store from '../app/store'; // Importez votre store Redux

import Navigation from '../components/navigation/Navigation'; // Assurez-vous que le chemin d'accès au composant est correct

test('renders Navigation component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    </Provider>
  );
});

