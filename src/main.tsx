import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthView } from './pages/AuthPage';
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProfilePage from './pages/ProfilePage.tsx';
import { RegisterData } from './pages/RegisterData.tsx';

const router = createBrowserRouter([{
  path: "/uniconn/",
  element: <App />,
  children: [
    { path: "/uniconn/register", element: <RegisterData /> },
    { path: "/uniconn/auth", element: <AuthView /> },
    { path: "/uniconn/profile", element: <ProfilePage /> },
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId="66651803956-jmqbjhdhdsvls817hg8c27u5ueo041r9.apps.googleusercontent.com">
    <RouterProvider router={router} />
    </GoogleOAuthProvider>    
  </React.StrictMode>,
)
