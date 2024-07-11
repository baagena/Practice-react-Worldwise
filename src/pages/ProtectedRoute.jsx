import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigator = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigator("/");
  }, [isAuthenticated, navigator]);

  return children;
}

export default ProtectedRoute;
