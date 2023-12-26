import { toast } from "react-toastify";
import useStore from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const logout = useStore().logout;
  return (
    <div>
      <h2>HomePage</h2>
      <button
        onClick={() => {
          toast("Hello");
        }}
      >
        Toast
      </button>
      <button
        onClick={() => logout(navigate)}
      >
        Logout
      </button>
    </div>
  );
}
