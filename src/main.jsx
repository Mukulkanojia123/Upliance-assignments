
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Store/Store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
			<PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
)
