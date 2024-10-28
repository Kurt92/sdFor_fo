import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import { Provider } from "react-redux";
// import store from "./app/reducers/store.js.oldver.backup"
import store from './app/redux/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <CookiesProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </CookiesProvider>
    </BrowserRouter>
    // </React.StrictMode>
);


reportWebVitals();
