import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginUser } from "../store/actions/authActions";
import { toast } from "react-toastify";


function LoginForm() {
    const [rememberMe, setRememberMe] = useState(false);
    const token = localStorage.getItem("token");
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "all",
    });

    const onSubmit = (formData, e) => {
        e.preventDefault();
        dispatch(loginUser(formData, rememberMe));
    };



    return (
        <div className="max-w-md mx-auto p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        id="email"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Enter a valid email address"
                            }
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        id="password"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="mr-2"
                        />
                        Remember me
                    </label>
                </div>

                <button
                    type="submit"

                    className="w-full p-2 bg-[#23A6F0] text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >

                </button>
            </form>
        </div>
    );
}

export default LoginForm;