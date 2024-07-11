import ReactDOM from 'react-dom/client'

import { TansTackQueryProvider } from '@/providers'

import App from './app.tsx'
import './globals.css'

const test = 'a'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TansTackQueryProvider>
    <App />
  </TansTackQueryProvider>
)
