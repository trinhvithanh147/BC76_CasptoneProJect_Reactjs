
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { sotre } from './redux/configStore.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")).render(
  <Provider store={sotre}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
