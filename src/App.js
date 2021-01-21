import logo from './logo.svg';
import './App.css';
import Homepage from './containers/homepage/Homepage';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
