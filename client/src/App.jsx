import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router';
import { GlobalProvider } from './context/GlobalContext';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import Show from './pages/Show';

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/:id' element={<Show />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App