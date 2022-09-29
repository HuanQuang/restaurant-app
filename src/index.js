import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/globalStyles/Styles';
import Store from './Store/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={Store}>
                <App />
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
);

reportWebVitals();
