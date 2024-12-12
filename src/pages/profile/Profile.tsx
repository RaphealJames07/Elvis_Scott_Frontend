import {Outlet} from "react-router";

const Profile = () => {
    return (
        <div className="w-full h-max flex">
            <div className="w-40">profile page</div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
