import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = sessionStorage.getItem('user')
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    return children;

}
export default ProtectedRoute