import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CommentList } from '@common-pages/CommentList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CommentList />
    </QueryClientProvider>
  </StrictMode>,
)
