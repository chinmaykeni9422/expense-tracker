import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/Global.styles.js'
import { GlobalContextProvider } from './contexts/globalContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
  </React.StrictMode>,
)
