import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

import config from '../config.js'

import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
        domain={config.domain}
        clientId={config.clientID}
        authorizationParams={{
            redirect_uri: "https://homyz-real-estate.vercel.app"
        }}
        audience="http://localhost:8000"
        scope="openid profile email"
    >
        <App />
    </Auth0Provider>
  </React.StrictMode>,
)
