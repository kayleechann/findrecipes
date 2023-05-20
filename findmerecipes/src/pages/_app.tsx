import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

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
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@500&family=Gentium+Book+Plus&family=Noto+Sans+Hebrew:wght@500;600&display=swap');
      </style>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
