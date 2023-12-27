import {
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import Logo from "../assets/logo.svg";
import useStore from "../hooks/useStore";
import {
  Navigate,
  useNavigate,
} from "react-router-dom";

export default function LoginPage() {
  const { login } = useStore(
    (state) => state
  );
  const navigate = useNavigate();
  const token =
    localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <img
        src={Logo}
        alt="Logo"
        className="max-h-[400px]"
      />
      <GoogleOAuthProvider
        clientId={
          import.meta.env.VITE_CLIENT_ID
        }
      >
        <GoogleLogin
          width={1000}
          shape="pill"
          theme="filled_blue"
          text="continue_with"
          locale="vi"
          onSuccess={async (res) =>
            await login(res, navigate)
          }
          onError={() => {
            console.log("ERROR");
          }}
        />
      </GoogleOAuthProvider>
      <div className="py-2">
        <p className="text-red-500 font-medium">
          Vui lòng sử dụng mail sinh
          viên để đăng nhập
        </p>
      </div>
    </div>
  );
}
