import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProfilePage from "./Pages/ProfilePage";
import SingleMealPage from "./Pages/SingleMealPage";
import SingleDrinkPage from "./Pages/SingleDrinkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="/meal/:id" element={<SingleMealPage />} />
          <Route path="/drink/:id" element={<SingleDrinkPage />} />
        </Route>
        <Route
          path="/profile-page"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
