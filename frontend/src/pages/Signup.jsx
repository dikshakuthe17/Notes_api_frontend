import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await api.post("/auth/signup", { email, password });
            alert("Signup successful! Please login.");
            navigate("/");
        } catch (err) {
            alert(err.response.data);
        }
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
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
                onClick={handleSignup}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Signup
            </button>
        </div>
    );
}
