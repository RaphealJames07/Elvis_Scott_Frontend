import {
    CiBoxes,
    CiBoxList,
    CiCreditCard1,
    CiLogout,
    CiStar,
} from "react-icons/ci";
import {NavLink, Outlet} from "react-router";
import {PiUserCircleThin} from "react-icons/pi";

const Profile = () => {
    return (
        <div className="w-full h-max flex phone:mt-16 pt-10 px-6">
            <div className="w-[25%] h-max flex flex-col gap-6">
                <div className="w-full h-max flex gap-3">
                    <img src="Logo" alt="Logo" />
                    <p className="w-max h-max flex flex-col text-2xl font-medium">
                        Welcome <span>Rapheal</span>
                    </p>
                </div>
                <div className="w-full h-max flex flex-col gap-4 text-sm">
                    <NavLink
                        to={`/account/my-orders`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiBoxList size={24} />
                            My Orders
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/my-profile`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <PiUserCircleThin size={24} />
                            My Profile
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/my-delivery-address`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiBoxes size={24} />
                            My delivery address
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/loyalty-program`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiStar size={24} />
                            Loyalty program
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/gift-card`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiCreditCard1 size={24} />
                            Gift card
                        </div>
                    </NavLink>

                    <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                        <CiLogout size={24} />
                        Logout
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
