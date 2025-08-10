import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex space-x-4">
                <Link to="/" className="hover:text-yellow-400">Login</Link>
                <Link to="/signup" className="hover:text-yellow-400">Signup</Link>
                {token && <Link to="/notes" className="hover:text-yellow-400">Notes</Link>}
            </div>
            {token && (
                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            )}
        </nav>
    );
}