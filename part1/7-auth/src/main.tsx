
import { createRoot } from 'react-dom/client'

import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

import './index.css'

import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
         refetchOnWindowFocus: false,
         refetchOnMount: false,
         retry: 1,
         staleTime: 60 * 1000,

    }
  }
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>

  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
  </QueryClientProvider>

)
