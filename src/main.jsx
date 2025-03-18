import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from "./Context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppProvider>
    <App />
  </AppProvider>

);
