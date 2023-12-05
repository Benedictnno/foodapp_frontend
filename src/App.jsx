import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProfilePage from "./Pages/ProfilePage";
import SingleMealPage from "./Pages/SingleMealPage";
import SingleDrinkPage from "./Pages/SingleDrinkPage";
import { useSelector } from "react-redux";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const { user } = useSelector((store) => store.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="categories" element={<CategoryPage />} />
          {!user && <Route path="/Login" element={<Login />} />}
          <Route path="/meal/:id" element={<SingleMealPage />} />
          <Route path="/drink/:id" element={<SingleDrinkPage />} />
          <Route path="*" element={<ErrorPage />} />
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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
