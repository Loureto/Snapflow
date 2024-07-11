import { createBrowserRouter } from 'react-router-dom'

import { AppLayout, AuthLayout, SignInPage } from '@/modules'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: []
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignInPage />
      },
      {
        path: '/sign-up',
        element: <p>Sign up</p> // TODO Sign up
      }
    ]
  },
  {
    path: '*',
    element: <p>Not found</p> // TODO 404
  }
])
