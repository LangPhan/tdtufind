import {
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
