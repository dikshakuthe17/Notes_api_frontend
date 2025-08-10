import React, { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom"; // Link import kiya

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/notes");
        } catch (err) {
            alert(err.response.data);
        }
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 mb-2"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleLogin}
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            >
                Login
            </button>

            {/* Signup link */}
            <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 underline">
                    Signup
                </Link>
            </p>
        </div>
    );
}
