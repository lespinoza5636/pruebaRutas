import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import root from './routes/root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Cards from './pages/Cards.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Contacts from './pages/Contacts.jsx'

const root = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
              <App />
             </ProtectedRoute>,
             children: [
              {
                path: "/",
                element: <Dashboard />,
              },
              {
                path: "card/:contactId",
                element: <Cards />,
              },
              {
                path: "contact/:contactId",
                element: <Contacts />,
              },
            ]
  },
  {
    path:"/login",
    element:<Login/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={root} />
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
