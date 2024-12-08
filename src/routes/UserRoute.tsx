import {Navigate} from "react-router-dom";

interface Props {
    children?: React.ReactNode;
    element?: React.ReactNode;
}

const UserRoute: React.FC<Props> = ({element, children}) => {
    const isUser = true;
    const isLoggedIn = "yes";

    return isUser && isLoggedIn ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/" replace />
    );
};

export default UserRoute;
