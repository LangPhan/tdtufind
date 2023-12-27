import {
  useState,
  useEffect,
} from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useStore from "../../hooks/useStore";

const RequireAuth = ({
  children,
  role,
}: {
  children: React.ReactNode | null;
  role: string;
}) => {
  const [
    isCheckingToken,
    setIsCheckingToken,
  ] = useState(true);
  const { isAuth, user, checkToken } =
    useStore((state) => state);
  const location = useLocation();

  const token =
    localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      async function checkedToken() {
        await checkToken(
          token,
          navigate
        );
        setIsCheckingToken(false);
      }
      checkedToken();
    }
  }, [token]);

  if (isCheckingToken && token) {
    return <></>;
  }

  if (
    !isAuth ||
    (role &&
      !user?.roles.includes(role))
  ) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
      />
    );
  }
  return children;
};

export default RequireAuth;
