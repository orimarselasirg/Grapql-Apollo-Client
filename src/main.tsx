import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const client = new ApolloClient({
  uri: import.meta.env.VITE_BASE_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
