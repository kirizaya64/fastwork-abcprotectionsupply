import React, { useState } from "react";
import { Link } from "react-router-dom";

// react icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// image
import LOGO from "../assets/abcLogo.png"

const Navbar = () => {
    const navbar = [
        {
            name: "หน้าแรก",
            to: "/",
        },
        {
            name: "เกี่ยวกับเรา",
            to: "/about",
        },
        {
            name: "สินค้า",
            to: "/products",
        },
        {
            name: "ติดต่อเรา",
            to: "/contact",
        }
    ]

    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className="fixed w-full h-20 shadow-xl bg-primary z-10">
            <nav className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                {/* ชื่อเว็บไซต์ */}
                <Link to="/" className="text-2xl font-bold text-white hover:text-red-500 transition-all duration-300">
                    <img src={LOGO} alt="Logo Company" width={150} />
                </Link>

                {/* เมนูต่างๆ */}
                <div className="hidden lg:flex">
                    {navbar.map((nav, index) => {
                        return (
                            <ul className="hidden lg:flex text-white" key={index}>
                                <Link to={nav.to}>
                                    <li className="ml-10 hover:text-secondary transition-all duration-300">
                                        {nav.name}
                                    </li>
                                </Link>
                            </ul>
                        )
                    })}
                </div>

                {/* ปุ่มสำหรับกดเมนูหน้าจอมือถือ */}
                <div onClick={handleToggleMenu} className="block lg:hidden text-white">
                    {showMenu ? ( <AiOutlineClose size={20} /> ) : ( <AiOutlineMenu size={20} /> )}
                </div>

                {/* เมนูต่างๆสำหรับมือถือ */}
                <ul className={`fixed left-0 top-0 lg:hidden lg:w-full w-10/12 h-screen bg-primary p-10 ease-in duration-300 ${showMenu ? "" : "left-[-100%]"} `}>
                    <h1 className="text-2xl font-bold text-white m-4">
                        ABCProtections.
                    </h1>

                    {navbar.map((nav, index) => {
                        return (
                            <li className="p-4 border-b border-gray-600 text-white hover:text-red-500 transition-all duration-200" key={index}>
                                <Link to={nav.to} onClick={handleCloseMenu}>
                                    {nav.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
