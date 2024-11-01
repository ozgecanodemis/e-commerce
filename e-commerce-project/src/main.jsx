import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import myStore from './store/store.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
