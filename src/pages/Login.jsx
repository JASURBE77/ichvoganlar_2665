import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3001/peoples');
                setUsers(res.data);
            } catch (err) {
                console.error("Server bilan bog'lanishda xatolik:", err);
            }
        };

        fetchUsers();

    }, []);

    const handleLogin = () => {

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {

            localStorage.setItem("user", JSON.stringify(user));
            navigate("/dashboard");

        } else {

            alert("Email yoki password noto'g'ri");

        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Hisobingizga kirish uchun email va password kiriting
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">

                    <div className="card-body">

                        <fieldset className="fieldset">

                            <label className="label">Email</label>

                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label className="label">Password</label>

                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            <Link to="/reg" className="btn">
                                Register
                            </Link>

                            <button
                                onClick={handleLogin}
                                className="btn btn-neutral mt-4"
                            >
                                Login
                            </button>

                        </fieldset>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;
