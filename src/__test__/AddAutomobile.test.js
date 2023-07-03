import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import AddAutomobile from '../components/AddAutomobile';

it('Add automobile component should render correctly', () => {
  const result = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <AddAutomobile />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(result).toMatchSnapshot();
});
