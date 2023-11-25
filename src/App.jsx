import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import MainPage from './Pages/MainPage';
import Login from './Pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
