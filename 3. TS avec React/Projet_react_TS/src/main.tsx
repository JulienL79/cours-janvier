import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CommentList } from '@common-pages/CommentList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductList } from '@common-pages/ProductList'
import { Cart } from '@common-molecules/Cart/Cart'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Cart/>
      <ProductList />
    </QueryClientProvider>
  </StrictMode>,
)
