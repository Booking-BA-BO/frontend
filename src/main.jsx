import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from "./Context/AppContext.jsx";
import { ApiProvider } from "./Context/ApiContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </AppProvider>
  </BrowserRouter>
);
