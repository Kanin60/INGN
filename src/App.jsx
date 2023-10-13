import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Alle } from "./pages/Alle/Alle";
import { Kategorier } from "./pages/Kategorier/Kategorier";
import { Details } from './pages/Details/Details';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Alle />} />
            <Route path='kategori/:kategori' element={<Kategorier/>}/>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/pageNotFound' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
