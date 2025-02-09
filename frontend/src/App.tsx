import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AdminPage from './pages/(logged-in)/AdminPage';
import ElementPage from './pages/(logged-in)/ElementPage';
import HomePage from './pages/(logged-in)/HomePage';
import PersonPage from './pages/(logged-in)/PersonPage';
import SearchPage from './pages/(logged-in)/SearchPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RequireAuth from './pages/provider/RequireAuth';
import RootPage from './pages/RootPage';

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
          <Route path="/search/:query" element={<SearchPage />} />
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
