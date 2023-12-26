import {
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import Logo from "../assets/logo.svg";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const login = useStore(
    (state) => state.login
  );
  const navigate = useNavigate();
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
          onSuccess={(res) =>
            login(res, navigate)
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
