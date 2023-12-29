import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/(logged-in)/HomePage';
import RootPage from './pages/RootPage';
import LoginPage from './pages/LoginPage';
import RequireAuth from './pages/provider/RequireAuth';
import AdminPage from './pages/(logged-in)/AdminPage';
import ElementPage from './pages/(logged-in)/ElementPage';
import PersonPage from './pages/(logged-in)/PersonPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />} errorElement={<ErrorPage />}>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth role="USER">
              <HomePage />
            </RequireAuth>
          }
        >
          <Route path="/" element={<ElementPage />} />
          <Route path="/person" element={<PersonPage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAuth role="ADMIN">
              <AdminPage />
            </RequireAuth>
          }
        />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
