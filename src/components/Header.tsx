// import { useLocation } from "react-router";
import logo from "../assets/logo1.png";
import {CiBag1, CiHeart, CiMenuBurger, CiSearch, CiUser} from "react-icons/ci";
import {useEffect, useState} from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            className={`w-full h-max z-50 relative ${scrolled ? "mb-16" : "mb-0"} `}
        >
            <div
                className={`w-full h-16 fixed top-0 left-0 flex items-center bg-white ${
                    scrolled ? "phone:opacity-100" : "phone:bg-transparent"
                } transition-all duration-500`}
            >
                <div className="w-full h-full flex justify-between phone:items-center phone:justify-center  px-8">
                    <div className="w-max h-full flex items-center">
                        <img src={logo} alt="" className="w-48 phone:w-32" />
                    </div>
                    <div className="w-max h-full flex items-center phone:hidden">
                        <ul className="w-max h-max flex list-none gap-6 text-sm">
                            <li className="cursor-pointer transition-all duration-500 hover:text-gray-700 text-gray-500">
                                Sneakers
                            </li>
                            <li className="cursor-pointer transition-all duration-500 hover:text-gray-700 text-gray-500">
                                Shoes
                            </li>
                            <li className="cursor-pointer transition-all duration-500 hover:text-gray-700 text-gray-500">
                                Streetwear
                            </li>
                        </ul>
                    </div>
                    <div className="w-max h-full flex items-center phone:hidden">
                        <div className="w-max h-10 border rounded border-gray-400 flex items-center px-2">
                            <input
                                type="text"
                                className="w-[30rem] rounded border-none outline-none "
                                placeholder="search for a brand, a model..."
                            />
                            <CiSearch size={20} />
                        </div>
                    </div>
                    <div className="w-max h-full flex items-center gap-8 phone:hidden">
                        <div className="w-max h-max cursor-pointer">
                            <CiUser size={20} />
                        </div>
                        <div className="w-max h-max cursor-pointer">
                            <CiHeart size={20} />
                        </div>
                        <div className="w-max h-max cursor-pointer relative">
                            <CiBag1 size={20} />
                            <span className="w-4 h-4 rounded-full text-[9px] bg-black text-white absolute -top-2 -right-2 flex items-center justify-center">
                                1
                            </span>
                        </div>
                        <div className="w-max h-max cursor-pointer">
                            <CiMenuBurger size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-[2vh] left-0 w-full h-12 hidden phone:flex justify-center">
                <div className="w-[85%] h-full flex items-center px-4 justify-between bg-white shadow-lg border border-gray-200 rounded-full">
                    <div className="w-[30%] h-max flex justify-between">
                        <div className="w-max h-max cursor-pointer">
                            <CiMenuBurger size={22} />
                        </div>

                        <div className="w-max h-max cursor-pointer">
                            <CiUser size={22} />
                        </div>
                    </div>
                    <div className="w-[40%] h-full relative ">
                        <div className="absolute -top-3 right-[28%] bg-[#4956ed] w-12 h-12 rounded-full flex items-center justify-center">
                            <CiSearch size={24} className="text-white" />
                        </div>
                    </div>
                    <div className="w-[30%] h-max flex justify-between">
                        <div className="w-max h-max cursor-pointer">
                            <CiHeart size={22} />
                        </div>

                        <div className="w-max h-max cursor-pointer relative">
                            <CiBag1 size={22} />
                            <span className="w-4 h-4 rounded-full text-[9px] bg-black text-white absolute -top-2 -right-2 flex items-center justify-center">
                                1
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
