import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './provider/Theme';

export default function RootPage() {
  return (
    <>
      <ThemeProvider defaultTheme="light">
        <div className="hidden md:block">
          <Outlet />
        </div>
        <div className="md:hidden">Tải phầm mềm đê</div>
      </ThemeProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
