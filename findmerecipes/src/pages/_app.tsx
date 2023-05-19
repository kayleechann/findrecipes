import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
  )
}
