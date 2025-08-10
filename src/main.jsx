import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { PinProvider } from './provider/PinProvider'
import { router } from './routes/router'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PinProvider>
        <RouterProvider router={router} />
      </PinProvider>
    </QueryClientProvider>
  </StrictMode>,
)
