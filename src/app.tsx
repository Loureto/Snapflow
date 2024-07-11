import { HelmetProvider, Helmet } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryCLient } from './lib'
import { router } from './routes'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | Snapflow' />
      <QueryClientProvider client={queryCLient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  )
}
