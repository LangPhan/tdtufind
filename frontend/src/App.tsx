import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const token =
    localStorage.getItem("token");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          token === "123" ? (
            <HomePage />
          ) : (
            <LoginPage />
          )
        }
        errorElement={<ErrorPage />}
      ></Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
