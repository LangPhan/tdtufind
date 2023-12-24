import {
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import Logo from "../assets/logo.svg";

export default function LoginPage() {
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
          onSuccess={(res) => {
            fetch(
              "http://localhost:3000/api/v1/auth",
              {
                method: "POST",
                headers: {
                  "Content-Type":
                    "application/json",
                },
                body: JSON.stringify({
                  credential:
                    res.credential,
                }),
              }
            )
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
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
