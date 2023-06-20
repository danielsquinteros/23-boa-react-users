import React from 'react'
import ReactDOM from 'react-dom/client'

// Configuración enrutador
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './views/App'
import User from './views/User'
import Users from './views/Users'


const myConfigureRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/user/:id',
    element: <User />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myConfigureRoute}/>
  </React.StrictMode>
)
