import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Loading from './components/ui/loading';
import AdminPage from './pages/(logged-in)/AdminPage';
import ElementPage from './pages/(logged-in)/ElementPage';
import HomePage from './pages/(logged-in)/HomePage';
import PersonPage from './pages/(logged-in)/PersonPage';
import SearchPage from './pages/(logged-in)/SearchPage';
import ErrorPage from './pages/ErrorPage';
import RequireAuth from './pages/provider/RequireAuth';
import RootPage from './pages/RootPage';

const LoginPage = lazy(() => import('./pages/LoginPage'))

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />} errorElement={<ErrorPage />} >
        <Route path="/login" element={
          <Suspense fallback={<Loading />} >
            <LoginPage />
          </Suspense>
        }
        />
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
