
import { Provider } from 'react-redux';
import './App.css';
import {routes} from './routes'

import { RouterProvider } from 'react-router-dom';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  );
}

export default App;
