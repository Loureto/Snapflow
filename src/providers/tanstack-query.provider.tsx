import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCLient = new QueryClient()
export const TansTackQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
}
