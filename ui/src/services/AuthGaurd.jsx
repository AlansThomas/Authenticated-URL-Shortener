import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";

export default function AuthGaurd(props) {
    const location = useLocation();
    const profile = JSON.parse(localStorage.getItem("token"))
    const token = profile?.token


    if (!token) {
        return <Navigate to='/' state={{ from: location }} />;
    }

    return <>{props.children}</>

}

AuthGaurd.propTypes = {
    children: PropTypes.any
}